import { TypeOrmModuleAsyncOptions } from '@nestjs/typeorm/dist/interfaces/typeorm-options.interface';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UserEntity } from './entities/user.entity';
import { ReportEntity } from './entities/report.entity';

export function dbConfig(): TypeOrmModuleAsyncOptions {
  return {
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: (config: ConfigService) => ({
      type: 'postgres',
      host: config.get('DB_HOST'),
      port: config.get('DB_PORT'),
      database: config.get('DB_NAME_DATABASE'),
      username: config.get('DB_USERNAME'),
      password: config.get('DB_PASSWORD'),
      entities: [UserEntity, ReportEntity],
      logging: true,
    }),
  };
}
