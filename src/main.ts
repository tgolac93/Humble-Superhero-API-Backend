import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common/pipes';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  //swagger metadata config
  const config = new DocumentBuilder()
  .setTitle("Humble Hero API")
  .setDescription("API to create and fetch heroes according to how humble they are.")
  .setVersion('0.8')
  .build();

  //enabling CORS so that the frontend could run
  app.enableCors({
    origin: 'http://localhost:3001', // Replace with your React app's URL
    methods: 'GET,POST,PUT,DELETE',  // Allowed HTTP methods
    allowedHeaders: 'Content-Type,Authorization', // Allowed headers
  });
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
