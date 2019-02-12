import { IsString } from 'class-validator';
import { UserRO } from 'src/user/user.dto';

// Detail the type of data that's been pass through the controller.
export class IdeaDTO {
  @IsString()
  idea: string;

  @IsString()
  description: string;
}

export class IdeaRO {
  id?: string;
  updated: Date;
  created: Date;
  idea: string;
  description: string;
  author: UserRO;
}