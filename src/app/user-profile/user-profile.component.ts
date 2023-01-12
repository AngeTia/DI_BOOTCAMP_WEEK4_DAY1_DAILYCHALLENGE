/**
 * import { Component, Input } from '@angular/core' est une instruction d'importation qui permet de charger les définitions de classe "Component" et "Input" depuis le package "@angular/core" dans le fichier en cours.
 * La classe Component est un décorateur qui permet de déclarer un composant Angular. Il prend en entrée un objet qui contient des propriétés comme selector, template, templateUrl, styles, etc. qui définissent la configuration du composant.
 * La classe Input est un décorateur qui permet de déclarer une propriété d'entrée d'un composant. Il permet de passer des données d'un composant parent à un composant enfant via des liaisons de propriétés. Il est utilisé pour déclarer une propriété qui peut être liée à une propriété d'un autre composant.
 */
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})

export class UserProfileComponent {
  /**
   * @Input() userName: string | undefined; est une déclaration de propriété pour un composant Angular.
   * La déclaration @Input() est un décorateur qui indique que cette propriété peut être liée à une propriété d'un autre composant. Cela signifie qu'elle peut recevoir des valeurs depuis un composant parent.
   * La propriété userName est déclarée comme étant de type string ou undefined. Cela signifie qu'elle peut stocker une chaîne de caractères ou aucune valeur (undefined).
   * Avec cette déclaration, vous pouvez maintenant utiliser la propriété userName dans le template du composant et lier la valeur de cette propriété à une propriété d'un autre composant en utilisant la syntaxe de liaison de propriétés. Par exemple : <app-user-profile [userName]="name"></app-user-profile>
   * Cela permet de passer la valeur de la propriété name du composant parent à la propriété userName du composant enfant.
   */
  @Input() userName: string | undefined;
  @Input() profilePictureUrl: string | undefined; 
}
