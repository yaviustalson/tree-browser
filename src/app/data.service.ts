import { Injectable } from '@angular/core';
import { Tree } from './tree';
import treeStub from './tree-data.stub';

@Injectable({ providedIn: 'root' })
export class DataService {
	getTree() : Tree {
		return treeStub;
	}
}
