(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{462:function(a,s,n){"use strict";n.r(s);var r=n(31),e=Object(r.a)({},(function(){var a=this,s=a.$createElement,n=a._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[n("h3",{attrs:{id:"冒泡排序"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#冒泡排序"}},[a._v("#")]),a._v(" 冒泡排序")]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v('// 冒泡排序\n         var arr=[2,3,5,6,8,9,7,1,0];\n         var temp="";\n         for(var i=0;i<arr.length-1;i++){\n            for(var j=i;j<arr.length-1;j++){\n                if(arr[i]>arr[j+1]){\n                    temp=arr[i];\n                    arr[i]=arr[j+1];\n                    arr[j+1]=temp;\n                }\n            }\n         }\n       console.log(arr);\n\n')])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br"),n("span",{staticClass:"line-number"},[a._v("7")]),n("br"),n("span",{staticClass:"line-number"},[a._v("8")]),n("br"),n("span",{staticClass:"line-number"},[a._v("9")]),n("br"),n("span",{staticClass:"line-number"},[a._v("10")]),n("br"),n("span",{staticClass:"line-number"},[a._v("11")]),n("br"),n("span",{staticClass:"line-number"},[a._v("12")]),n("br"),n("span",{staticClass:"line-number"},[a._v("13")]),n("br"),n("span",{staticClass:"line-number"},[a._v("14")]),n("br")])]),n("h3",{attrs:{id:"插入排序1"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#插入排序1"}},[a._v("#")]),a._v(" 插入排序1")]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v(" // 插入排序1\n        var arr=[2,3,5,6,8,9,7,1,0];\n        for(var i=1;i<arr.length;i++){\n            var kay=arr[i];\n            for(var j=i-1;arr[j]>kay;j--){\n                arr[j+1]=arr[j];\n            }\n            arr[j+1]=kay;\n        }\n        console.log(arr);\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br"),n("span",{staticClass:"line-number"},[a._v("7")]),n("br"),n("span",{staticClass:"line-number"},[a._v("8")]),n("br"),n("span",{staticClass:"line-number"},[a._v("9")]),n("br"),n("span",{staticClass:"line-number"},[a._v("10")]),n("br")])]),n("h3",{attrs:{id:"插入排序2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#插入排序2"}},[a._v("#")]),a._v(" 插入排序2")]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("        // 插入排序2\n        var arr=[2,3,5,6,8,9,7,1,0];\n        for(var i=1;i<arr.length;i++){\n            var  kay=arr[i];\n            var j=i-1;\n            while(arr[j]>kay){\n                arr[j+1]=arr[j]\n                j--;\n            }\n            arr[j+1]=kay;\n        }\n        console.log(arr);\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br"),n("span",{staticClass:"line-number"},[a._v("7")]),n("br"),n("span",{staticClass:"line-number"},[a._v("8")]),n("br"),n("span",{staticClass:"line-number"},[a._v("9")]),n("br"),n("span",{staticClass:"line-number"},[a._v("10")]),n("br"),n("span",{staticClass:"line-number"},[a._v("11")]),n("br"),n("span",{staticClass:"line-number"},[a._v("12")]),n("br")])]),n("h3",{attrs:{id:"选择排序"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#选择排序"}},[a._v("#")]),a._v(" 选择排序")]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("   //选择排序\n         var arr=[2,3,5,6,8,9,7,1,0];\n        for (var i = 0; i < arr.length; i++) {\n            for (var j = i; j < arr.length - 1; j++) {\n                if (arr[i] > arr[j + 1]) {\n                    var tmp = arr[i]; \n                    arr[i] = arr[j + 1]\n                    arr[j + 1] = tmp\n                }\n                console.log(arr)\n            }\n\n        }\n\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br"),n("span",{staticClass:"line-number"},[a._v("7")]),n("br"),n("span",{staticClass:"line-number"},[a._v("8")]),n("br"),n("span",{staticClass:"line-number"},[a._v("9")]),n("br"),n("span",{staticClass:"line-number"},[a._v("10")]),n("br"),n("span",{staticClass:"line-number"},[a._v("11")]),n("br"),n("span",{staticClass:"line-number"},[a._v("12")]),n("br"),n("span",{staticClass:"line-number"},[a._v("13")]),n("br"),n("span",{staticClass:"line-number"},[a._v("14")]),n("br")])]),n("h3",{attrs:{id:"快速排序"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#快速排序"}},[a._v("#")]),a._v(" 快速排序")]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("var arr=[6,8,11,4,7,5];\n    function quickSort(arr){\n            if(arr.length<=1){\n                return arr;//如果数组只有一个数，就直接返回；\n            }\n            var num = Math.floor(arr.length/2);//找到中间数的索引值，如果是浮点数，则向下取整\n            var numValue = arr.splice(num,1);//找到中间数的值\n            var left = [];\n            var right = [];\n            for(var i=0;i<arr.length;i++){\n                if(arr[i]<numValue){\n                    left.push(arr[i]);//基准点的左边的数传到左边数组\n                }\n                else{\n                   right.push(arr[i]);//基准点的右边的数传到右边数组\n                }\n            }\n            return quickSort(left).concat(numValue,quickSort(right));//递归不断重复比较\n        }\n        \n       console.log (quickSort(arr));//弹出“2,16,32,37,45,87”\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br"),n("span",{staticClass:"line-number"},[a._v("7")]),n("br"),n("span",{staticClass:"line-number"},[a._v("8")]),n("br"),n("span",{staticClass:"line-number"},[a._v("9")]),n("br"),n("span",{staticClass:"line-number"},[a._v("10")]),n("br"),n("span",{staticClass:"line-number"},[a._v("11")]),n("br"),n("span",{staticClass:"line-number"},[a._v("12")]),n("br"),n("span",{staticClass:"line-number"},[a._v("13")]),n("br"),n("span",{staticClass:"line-number"},[a._v("14")]),n("br"),n("span",{staticClass:"line-number"},[a._v("15")]),n("br"),n("span",{staticClass:"line-number"},[a._v("16")]),n("br"),n("span",{staticClass:"line-number"},[a._v("17")]),n("br"),n("span",{staticClass:"line-number"},[a._v("18")]),n("br"),n("span",{staticClass:"line-number"},[a._v("19")]),n("br"),n("span",{staticClass:"line-number"},[a._v("20")]),n("br"),n("span",{staticClass:"line-number"},[a._v("21")]),n("br")])])])}),[],!1,null,null,null);s.default=e.exports}}]);