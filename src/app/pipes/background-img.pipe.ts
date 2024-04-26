import { Pipe, PipeTransform } from '@angular/core';
import { Article } from '../interfaces/article';

@Pipe({
  name: 'img',
  standalone: true
})
export class BackgroundImgPipe implements PipeTransform {
  transform(posts: Article[], ...args: unknown[]): unknown {
    let post = posts.filter(value => value == args[0])[0];
    return post.imgPath;
  }

}
