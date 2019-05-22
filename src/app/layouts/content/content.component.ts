import { Component, OnInit } from '@angular/core';
import { OverlayContainer} from '@angular/cdk/overlay';
import { ThemeService, ResponsiveService } from '../../core';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  private alive = true;

  theme: string = 'my-light-theme';
  isMobile: boolean = false;

  constructor(private themeService: ThemeService, public overlayContainer: OverlayContainer, private responsiveService: ResponsiveService) { }

  ngOnInit() {
    this.themeService.isDarkTheme.pipe(takeWhile(() => this.alive))
      .subscribe(theme => {

        if (this.overlayContainer.getContainerElement().classList.contains("my-light-theme")) {
          this.overlayContainer.getContainerElement().classList.remove("my-light-theme");
          this.overlayContainer.getContainerElement().classList.add("my-dark-theme");
        } 
        else if (this.overlayContainer.getContainerElement().classList.contains("my-dark-theme")) {
          this.overlayContainer.getContainerElement().classList.remove("my-dark-theme");
          this.overlayContainer.getContainerElement().classList.add("my-light-theme");
        } 
        else {
          this.overlayContainer.getContainerElement().classList.add("my-light-theme");
        }

        this.theme = (theme) ? 'my-dark-theme' : 'my-light-theme';
      });

    this.responsiveService.getMobileStatus()
      .subscribe(isMobile =>{ 
        this.isMobile = isMobile;
      });

    this.onResize();    
  }

  ngOnDestroy() {
    this.alive = false;
  }

  onResize(){
    this.responsiveService.checkWidth();
  }
}
