(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{452:function(a,t,e){"use strict";e.r(t);var v=e(31),_=Object(v.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h3",{attrs:{id:"硬盘出错"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#硬盘出错"}},[a._v("#")]),a._v(" 硬盘出错")]),a._v(" "),e("ul",[e("li",[a._v("没有出错的硬盘，提升硬盘的稳定性成本较高")]),a._v(" "),e("li",[a._v("提供健康监控、快速检测、自动恢复到HDFS")])]),a._v(" "),e("h3",{attrs:{id:"流式数据访问"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#流式数据访问"}},[a._v("#")]),a._v(" 流式数据访问")]),a._v(" "),e("ul",[e("li",[a._v("适应批处理处理的要求")]),a._v(" "),e("li",[a._v("交互式处理、随机访问支持差")])]),a._v(" "),e("h3",{attrs:{id:"简单的一致性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#简单的一致性"}},[a._v("#")]),a._v(" 简单的一致性")]),a._v(" "),e("ul",[e("li",[a._v("一次写入、多次读取的访问模式")]),a._v(" "),e("li",[a._v("一个文件一经创建、写入、关闭后，不需要改变")]),a._v(" "),e("li",[a._v("简单数据一致性的实现，实现了高吞吐的数据访问")])]),a._v(" "),e("h3",{attrs:{id:"大规模数据集"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#大规模数据集"}},[a._v("#")]),a._v(" 大规模数据集")]),a._v(" "),e("ul",[e("li",[a._v("适合存储GB TB的大文件")])]),a._v(" "),e("h3",{attrs:{id:"移动的计算"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#移动的计算"}},[a._v("#")]),a._v(" 移动的计算")]),a._v(" "),e("ul",[e("li",[a._v("计算移向数据，计算本地化")])]),a._v(" "),e("h3",{attrs:{id:"hdfs-分布式文件系统"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hdfs-分布式文件系统"}},[a._v("#")]),a._v(" HDFS 分布式文件系统")]),a._v(" "),e("ul",[e("li",[a._v("本质上是分散式，大文件切割存储。（切蛋糕）")])]),a._v(" "),e("h2",{attrs:{id:"mapreduce"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mapreduce"}},[a._v("#")]),a._v(" MapReduce")]),a._v(" "),e("ul",[e("li",[a._v("分布式离线批处理计算框架")])]),a._v(" "),e("h3",{attrs:{id:"nomenode"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nomenode"}},[a._v("#")]),a._v(" NomeNode")]),a._v(" "),e("ul",[e("li",[a._v("单个实例的主节点")]),a._v(" "),e("li",[a._v("为Client提供读写服务，本质上客服端是和DataNode 完成读写操作的")]),a._v(" "),e("li",[a._v("元数据管理")])]),a._v(" "),e("h3",{attrs:{id:"fsimage-文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#fsimage-文件"}},[a._v("#")]),a._v(" fsimage 文件")]),a._v(" "),e("ul",[e("li",[a._v("hdfs-site.xml/dfs.name,dir")]),a._v(" "),e("li",[a._v("印像文件是内存metadata数据快照")]),a._v(" "),e("li",[a._v("不会保存Block的位置信息")])]),a._v(" "),e("h3",{attrs:{id:"edits-log"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#edits-log"}},[a._v("#")]),a._v(" edits log")]),a._v(" "),e("ul",[e("li",[a._v("记录增、删、改名、移动操作")])]),a._v(" "),e("h3",{attrs:{id:"secondnamenode"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#secondnamenode"}},[a._v("#")]),a._v(" SecondNameNode")]),a._v(" "),e("ul",[e("li",[e("p",[a._v("辅助结点，不是备份结点！")])]),a._v(" "),e("li",[e("p",[a._v("连接到NameNode,完成fsimage文件和edits log文件合并，因为需要耗时长，消耗资源，NameNode并不合适，所以分出去让其他进程来做。")])]),a._v(" "),e("li",[e("p",[a._v("合并策略")]),a._v(" "),e("p",[a._v("1、时间\n2、大小")])]),a._v(" "),e("li",[e("p",[a._v("check point 一个时间点")])])]),a._v(" "),e("h3",{attrs:{id:"datanode"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#datanode"}},[a._v("#")]),a._v(" DataNode")]),a._v(" "),e("ul",[e("li",[a._v("数据结点")]),a._v(" "),e("li",[a._v("block存储的节点")]),a._v(" "),e("li",[a._v("通过心跳定时向NameNode汇报监控状态")]),a._v(" "),e("li",[a._v("定时汇报自己拥有的块信息")])])])}),[],!1,null,null,null);t.default=_.exports}}]);