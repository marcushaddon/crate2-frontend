import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'friendlyTime'
})
export class FriendlyTimePipe implements PipeTransform {

  transform(secString: string, args?: any): string {
    const totalSeconds = parseFloat(secString);
    if (isNaN(totalSeconds)) {
      return '0:00';
    }
    const niceSeconds = Math.floor(totalSeconds);
    const seconds = niceSeconds % 60;
    const minSecs = niceSeconds - seconds;
    const minutes = minSecs / 60;
    const secPad = seconds < 10 ? '0' : '';
    return minutes + ':' + secPad +  seconds;
  }

}
