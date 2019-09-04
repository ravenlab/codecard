/*
	MIT License

	Copyright (c) 2019 ravenlab

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
*/
class CodeCard {
	
	private title: string;
	private description: string;
	private repoIcon: string;
	private icon: string;
	private url: string;
	constructor(title: string, description: string, icon:string, url: string)
	{
		this.title = title;
		this.description = description;
		this.icon = icon;
		this.url = url.toLowerCase();
		this.repoIcon = this.parseIcon(url);
	}
	
	private parseIcon(url: string): string
	{
		if(url.startsWith("https://github.com"))
		{
			return "fab fa-github";
		}
		else if(url.startsWith("https://gitlab.com"))
		{
			return "fab fa-gitlab";
		}
	}
	
	public render(element: any): void
	{
		var html = '<div class="card code-card">' +
		'<div class="card-body">' + 
		'<h5 class="card-title"><i class="' + this.icon + '"></i> ' + this.title + '</h5>' +
		'<p class="card-text">' + this.description + '</p>' +
		'<a href="' + this.url +'" target="_blank" class="btn btn-primary font"><i class="' + this.repoIcon + '"></i> View on Github</a>';
		element.innerHTML = element.innerHTML + html;
	}
}