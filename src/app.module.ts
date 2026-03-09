import { Module } from '@nestjs/common';
import { NecordModule } from 'necord';
import { IntentsBitField } from 'discord.js';
import { StatusController } from 'modules/status/status.controller';
import { AppUpdate } from 'app.update';
import { CreamPuffService } from 'modules/discord/creampuff.commands';

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
  providers: [AppUpdate, CreamPuffService]
})
export class AppModule {}
