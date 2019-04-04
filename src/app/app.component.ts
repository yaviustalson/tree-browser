import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { Tree } from './tree';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.styl']
})
export class AppComponent implements OnInit {
	title : string = 'tree-browser';
	treeData : Tree;

	constructor(private dataService: DataService) {}

	ngOnInit() {
		const tree = this.dataService.getTree();
		this.treeData = tree;
	}
};
