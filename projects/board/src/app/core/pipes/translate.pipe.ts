import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'translate',
  standalone:false
})
export class TranslatePipe implements PipeTransform {

  transform(value: string | null, lang = 'en'): unknown {
    switch (value) {
      case "UserService:READ DONE":
        return lang == 'fr' ? "Liste mise à jour" : "User list has been refreshed";

      case "UserService:CREATE DONE":
        return lang == 'fr' ? "Utilisateur créé" : "User has been created";

      case "UserService:DELETE DONE":
        return lang == 'fr' ? "Utilisateur supprimée" : "User has been deleted";

      default:
        return value;
    }
  }

}
