import { CharacterType } from '../characters/charactersType';

export type LocationType = {
   id: number;
   name: string;
   type: string;
   dimension: string;
   residents: CharacterType[];
   created: string;
};

export type LocationInfoType = {
   location: {
      id: number;
      name: string;
      type: string;
      dimension: string;
      residents: CharacterType[];
      created: string;
   };
};
