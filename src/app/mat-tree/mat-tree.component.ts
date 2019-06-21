import { Component,  } from '@angular/core';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
import {FlatTreeControl} from '@angular/cdk/tree';


interface GRADUATIONNode{
  name:string;
  children?:GRADUATIONNode[];
}

  const  TREE_DATA:GRADUATIONNode[] = [{
    name:'Branch',
    children:[ {name:'CSE'},{name:'ECE'},{name:'EEE'},{name:'CIVIL'} ]},
    {
    name:'Courses',
    children:[{
      name:'Languages',
      children:[  {name:'C'}, {name:'JAVA'}]
    }]}];
    interface ExampleFlatNode {
      expandable: boolean;
      name: string;
      level: number;
    }
@Component({
  selector: 'app-mat-tree',
  templateUrl: './mat-tree.component.html',
  styleUrls: ['./mat-tree.component.css']
})
export class MatTreeComponent {
  
  private _transformer = (node: GRADUATIONNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  }

  treeControl = new FlatTreeControl<ExampleFlatNode>(
      node => node.level, node => node.expandable);

  treeFlattener = new MatTreeFlattener(
      this._transformer, node => node.level, node => node.expandable, node => node.children);

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor() {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;
}



  