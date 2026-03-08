import { Module } from '@nestjs/common';
import { NecordModule } from 'necord';
import { IntentsBitField } from 'discord.js';
import { StatusController } from 'modules/status/status.controller';
import { AppUpdate } from 'app.update';

@Module({
  imports: [
    NecordModule.forRoot({
      token: process.env["DISCORD_TOKEN"]!,
      intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.DirectMessages
      ]
    })
  ],
  controllers: [StatusController],
  providers: [AppUpdate]
})
export class AppModule {}
