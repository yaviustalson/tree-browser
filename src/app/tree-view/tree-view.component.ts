import { Component, Input, OnInit } from '@angular/core';
import { Tree } from '../tree';

const fileImgUrl = 'assets/icons/file.png';
const folderImgUrl = 'assets/icons/folder.png';
const folderImgUrlOpened = 'assets/icons/folder-opened.png';
@Component({
	selector: 'tree-view',
	templateUrl: './tree-view.component.html',
	styleUrls: ['./tree-view.component.styl']
})
export class TreeViewComponent implements OnInit{
	@Input() data : Tree;
	@Input() initialOpened : boolean = false;
	folderImgUrl : string = folderImgUrl;
	fileImgUrl : string = fileImgUrl;
	opened : boolean = false;
	items : Array<Tree>;
	type : string;

	clickHandler() {
		if (this.type === 'folder') {
			this.opened = !this.opened;
			this.folderImgUrl = this.opened ? folderImgUrlOpened : folderImgUrl;
		}
	}

	ngOnInit() {
		const { children, type } = this.data;
		if (this.data.children) {
			this.items = children.sort((a, b) => {
				if (a.type === b.type) {
					return a.name > b.name ? 1 : -1;
				} else if (a.type === 'folder') {
					return -1
				} else {
					return 1;
				}
			});
		}
		this.type = type || 'folder';
		this.opened = this.initialOpened;
	}
};
