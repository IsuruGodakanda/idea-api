import { IsString } from 'class-validator';

// Detail the type of data that's been pass through the controller.
export class IdeaDTO {
  @IsString()
  idea: string;

  @IsString()
  description: string;
}