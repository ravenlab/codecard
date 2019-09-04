class CodeCard {
	
	private title: string;
	private icon: string;
	private description: string;
	private url: string;
	constructor(title: string, description: string, url: string)
	{
		this.title = title;
		this.icon = this.parseIcon(url);
		this.description = description;
		this.url = url;
	}
	
	private parseIcon(url: string): string
	{
		if(url.startsWith("https://github.com") || url.startsWith("github.com"))
		{
			return "fab fa-github";
		}
		else if(url.startsWith("https://gitlab.com") || url.startsWith("gitlab.com"))
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
		'<a href="' + this.url +'" target="_blank" class="btn btn-primary font"><i class="' + this.icon + '"></i> View on Github</a>';
		element.innerHTML = element.innerHTML + html;
	}
}