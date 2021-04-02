import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { faArrowCircleLeft, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-go-to-link-button',
  templateUrl: './go-to-link-button.component.html',
  styleUrls: ['./go-to-link-button.component.scss']
})
export class GoToLinkButtonComponent {
  @Input() public icon: IconDefinition = faArrowCircleLeft;
  @Input() public route: string = '/people';
  @Input() public innerText: string = 'Go to People List';

  constructor(private router: Router) { }

  public goTo(): void {
    this.router.navigate([this.route]);
  }

}
