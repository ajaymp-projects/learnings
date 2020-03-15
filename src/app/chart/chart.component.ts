import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
// import {ChartService} from '../chart.service'

import * as _ from 'lodash';



@Component({
    selector: 'test-chart',
    templateUrl: './chart.component.html',
    styleUrls: ['./chart.component.css']
})

export class TestChartComponent implements OnInit {

    @ViewChild('LineChart') el: ElementRef;
    @ViewChild('3DChart') el1: ElementRef;


    constructor() { }

    ngOnInit() {

        this.basicChart();
        this.threeDchart();

    }

    getData() {

        let arr = [];

        for (let i = 0; i < 10; i++) {
            arr.push(Array(10).fill(2).map(() => Math.random()));

        }
        console.log(arr);
        return arr;

    }
    threeDchart(){
        const element = this.el.nativeElement
        const data = [{
            x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            y: [1, 2, 4, 8, 16, 32, 50 , 60 ,70, 150]
        }];
        
        const style = {
            margin: { t: 0 }
        }

        Plotly.plot(element, data, style)
    }

    basicChart() {
        const element = this.el1.nativeElement
        // const data = [{
        //     x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        //     y: [1, 2, 4, 8, 16, 32, 50 , 60 ,70, 150]
        // }]

        // const data= [{

        //     a: [1, 2, 3, 4, 5, 6],
        //     b: [10.10, 100.5, 300, 199.25, 160, 90],
        //     c: [200, 25.25, 365, 50.2, 270.25, 110.5],
        //     d: [27.30,300.25,200,330.30,160,90],

        // }]
        const formatedData = [{
            z: this.getData(),
            type: 'surface'
        }];
        const layout = {
            tiltle: '3D CHART',
            autosize: false,
            weight: 750,
            height: 500,
            margin: {
                l: 65,
                r: 50,
                b: 65,
                t: 90
            }
        }

      

        Plotly.plot(element, formatedData, layout)
    }
}