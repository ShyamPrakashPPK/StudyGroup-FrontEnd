import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

    private url = 'http://localhost:3000/api/'; // your server local path

  constructor(private _http: HttpClient) { }

  postBlog(blog: any, tags: string[]) {
    let user = localStorage.getItem('Email')
    console.log(user, "blog<-------");
    console.log(tags,"<==========tags");
    return this._http.post(this.url + 'blogs/add', { blog, tags ,user})
  }

  getAllBlogs(skip: number, limit: number, filter: string, sort: string) {
    const queryParams = `?skip=${skip}&limit=${limit}&filter=${filter}&sort=${sort}`;
    return this._http.get(this.url + 'blogs' + queryParams)
  }

  getBlog(id: string) {
    return this._http.get(this.url + 'blogs/blog/' + id)
  }

  getLatestBlog() {
    return this._http.get(this.url + 'blogs/latest');
  }

  getTagRelatedBlog(tags: [
    {
      name: string,
      _id: string
    }]) {
    const queryParams = new HttpParams().set('tags', tags.map(tag => tag._id).join(','));
    return this._http.get(this.url + 'blogs/tags', { params: queryParams });
  }

  getNoAnswers() {
    return this._http.get(this.url + 'blogs/noanswers');
  }

  likeBlog(blogId: string) {
    return this._http.get(this.url + 'blogs/like/' + blogId);
  }

  saveBlog(blogId: string) {
    return this._http.get(this.url + 'blogs/save/' + blogId);
  }

  getUserBlogs(userId: string) {
    return this._http.get(this.url + 'blogs/userBlogs/' + userId);
  }
}
