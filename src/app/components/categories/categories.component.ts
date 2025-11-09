import { Component, AfterViewInit } from '@angular/core';
declare var $: any;
declare var ScrollMagic: any;
declare var TweenMax: any;
declare var Circ: any;

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent implements AfterViewInit {

  ngAfterViewInit() {
    // Initialize milestones counter animation
    this.initMilestones();
  }

  private initMilestones() {
    if($('.milestone_counter').length) {
      var milestoneItems = $('.milestone_counter');
      var ctrl = new ScrollMagic.Controller();

      milestoneItems.each(function(this: HTMLElement, i: number) {
        var ele = $(this);
        var endValue = ele.data('end-value');
        var eleValue = ele.text();

        /* Use data-sign-before and data-sign-after to add signs
        infront or behind the counter number */
        var signBefore = "";
        var signAfter = "";

        if(ele.attr('data-sign-before')) {
          signBefore = ele.attr('data-sign-before');
        }

        if(ele.attr('data-sign-after')) {
          signAfter = ele.attr('data-sign-after');
        }

        var milestoneScene = new ScrollMagic.Scene({
          triggerElement: this,
          triggerHook: 'onEnter',
          reverse:false
        })
        .on('start', function(this: void) {
          var counter = {value:eleValue};
          var counterTween = TweenMax.to(counter, 4,
          {
            value: endValue,
            roundProps:"value", 
            ease: Circ.easeOut, 
            onUpdate:function(this: void) {
              var milestoneElements = document.getElementsByClassName('milestone_counter');
              if (milestoneElements[i]) {
                milestoneElements[i].innerHTML = signBefore + counter.value + signAfter;
              }
            }
          });
        })
        .addTo(ctrl);
      });
    }
  }
}