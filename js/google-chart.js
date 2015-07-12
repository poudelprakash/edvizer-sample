;(function() {
    'use strict';
    window.Edvizer = window.Edvizer || {};

    window.Edvizer.Chart = function() {
          // default datasets for piechart
          var dataSet1 = [
            ['Task', 'Hours per Day'],
            ['Work', 11],
            ['Eat', 2],
            ['Commute', 2],
            ['Watch TV', 2],
            ['Sleep', 7]
          ];

          this.dataSet2 = [
            ['Task', 'Hours per Day'],
            ['Work', 11],
            ['Eat', 2],
            ['Commute', 2],
            ['Watch TV', 2]
          ];

          // default options for chart
          this.options = {
               title: 'My Daily Activities'
          };

          var self = this;

          this.init = function() {
            google.load("visualization", "1", {
                packages: ["corechart"]
            });
            google.setOnLoadCallback(self.prepareChart);
          };

          this.prepareChart = function() {
            self.chart = new google.visualization.PieChart(document.getElementById('pie-chart'));
            self.drawChart(dataSet1, self.options)
          };

          this.drawChart = function(dataSet, options) {
            var data = buildData(dataSet);
            self.chart.draw(data, options);
          };

          // private functions
          var buildData = function(dataSet) {
            return google.visualization.arrayToDataTable(dataSet);
          };

          (function(){
               $('#data-1').click(function(){
                    self.drawChart(dataSet1, self.options);
               });
               $('#data-2').click(function(){
                    self.drawChart(self.dataSet2, self.options);
               });
          })();
    }
})();