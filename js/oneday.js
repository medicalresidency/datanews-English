function buttonPressed(button) {
    var buttons = document.querySelectorAll(".button button");
    buttons.forEach(function(btn) {
        btn.classList.remove("button-pressed");
    });
    button.classList.add("button-pressed");
}

const svg = d3.select("#map").append("svg")
    .attr('viewBox', '0 0 980 400') // 扩展 viewBox 宽度以包含两个图像
    .attr("preserveAspectRatio", "xMidYMid meet") // Preserve aspect ratio
    .attr("width", "100%") // Make it responsive
    .attr("height", "100%");

// 背景图像的 <g> 元素
const backgroundGroup = svg.append("g")
    .attr('viewBox', '0 0 1200 400')
    .attr("transform", "translate(-120,0) scale(1.2)"); // 平移背景图像位置

const backgroundImage = backgroundGroup.append("image")
    .attr("xlink:href", "img/room.png")
    .attr("x", 0)
    .attr("y", 0)
    .attr("width", 800)
    .attr("height", 400);

// 笔记本图像的 <g> 元素
const notebookGroup = svg.append("g")
    .attr('viewBox', '0 0 800 400')
    .attr("transform", "translate(355,-10) scale(1.2)"); // 平移并缩放笔记本图像位置

const notebookImage = notebookGroup.append("image")
    .attr("xlink:href", "img/notebook.png")
    .attr("x", 0)
    .attr("y", 0)
    .attr("width", 800)
    .attr("height", 400);


//单个房间图层高光
var single6 = svg.append("image")
    .attr("xlink:href", "img/single6.png")
    .attr("x", -120)
    .attr("y", 0)
    .attr("width", 840)
    .attr("height", 400)
    .attr("transform", "scale(1.2)")
    .style("display", "none");

var single5 = svg.append("image")
    .attr("xlink:href", "img/single5.png")
    .attr("x", -120)
    .attr("y", 0)
    .attr("width", 840)
    .attr("height", 400)
    .attr("transform", "scale(1.2)")
    .style("display", "none");
var single4 = svg.append("image")
    .attr("xlink:href", "img/single4.png")
    .attr("x", -120)
    .attr("y", 0)
    .attr("width", 840)
    .attr("height", 400)
    .attr("transform", "scale(1.2)")
    .style("display", "none");
var single3 = svg.append("image")
    .attr("xlink:href", "img/single3.png")
    .attr("x", -120)
    .attr("y", 0)
    .attr("width", 840)
    .attr("height", 400)
    .attr("transform", "scale(1.2)")
    .style("display", "none");
var single2 = svg.append("image")
    .attr("xlink:href", "img/single2.png")
    .attr("x", -120)
    .attr("y", 0)
    .attr("width", 840)
    .attr("height", 400)
    .attr("transform", "scale(1.2)")
    .style("display", "none");
var single1 = svg.append("image")
    .attr("xlink:href", "img/single1.png")
    .attr("x", -120)
    .attr("y", 0)
    .attr("width", 840)
    .attr("height", 400)
    .attr("transform", "scale(1.2)")
    .style("display", "none");

//饼饼记事簿文字图层
var bing = svg.append("image")
    .attr("xlink:href", "imgbing/bing.png")
    .attr("x", 350)
    .attr("y", -10)
    .attr("width", 700)
    .attr("height", 400)
    .attr("transform", "scale(1.2)")
    .style("display", "none");
var bingA = svg.append("image")
    .attr("xlink:href", "imgbing/bingA.png")
    .attr("x", 350)
    .attr("y", -10)
    .attr("width", 700)
    .attr("height", 400)
    .attr("transform", "scale(1.2)")
    .style("display", "none");
var bingB1 = svg.append("image")
    .attr("xlink:href", "imgbing/bingB1.png")
    .attr("x", 350)
    .attr("y", -10)
    .attr("width", 700)
    .attr("height", 400)
    .attr("transform", "scale(1.2)")
    .style("display", "none");
var bingB2 = svg.append("image")
    .attr("xlink:href", "imgbing/bingB2.png")
    .attr("x", 350)
    .attr("y", -10)
    .attr("width", 700)
    .attr("height", 400)
    .attr("transform", "scale(1.2)")
    .style("display", "none");
var bingB3 = svg.append("image")
    .attr("xlink:href", "imgbing/bingB3.png")
    .attr("x", 350)
    .attr("y", -10)
    .attr("width", 700)
    .attr("height", 400)
    .attr("transform", "scale(1.2)")
    .style("display", "none");
var bingB4 = svg.append("image")
    .attr("xlink:href", "imgbing/bingB4.png")
    .attr("x", 350)
    .attr("y", -10)
    .attr("width", 700)
    .attr("height", 400)
    .attr("transform", "scale(1.2)")
    .style("display", "none");
var bingC = svg.append("image")
    .attr("xlink:href", "imgbing/bingC.png")
    .attr("x", 350)
    .attr("y", -10)
    .attr("width", 700)
    .attr("height", 400)
    .attr("transform", "scale(1.2)")
    .style("display", "none");
var bingD1 = svg.append("image")
    .attr("xlink:href", "imgbing/bingD1.png")
    .attr("x", 350)
    .attr("y", -10)
    .attr("width", 700)
    .attr("height", 400)
    .attr("transform", "scale(1.2)")
    .style("display", "none");
var bingDE = svg.append("image")
    .attr("xlink:href", "imgbing/bingDE.png")
    .attr("x", 350)
    .attr("y", -10)
    .attr("width", 700)
    .attr("height", 400)
    .attr("transform", "scale(1.2)")
    .style("display", "none");
var bingE3 = svg.append("image")
    .attr("xlink:href", "imgbing/bingE3.png")
    .attr("x", 350)
    .attr("y", -10)
    .attr("width", 700)
    .attr("height", 400)
    .attr("transform", "scale(1.2)")
    .style("display", "none");
var bingF1 = svg.append("image")
    .attr("xlink:href", "imgbing/bingF1.png")
    .attr("x", 350)
    .attr("y", -10)
    .attr("width", 700)
    .attr("height", 400)
    .attr("transform", "scale(1.2)")
    .style("display", "none");
var bingF2 = svg.append("image")
    .attr("xlink:href", "imgbing/bingF2.png")
    .attr("x", 350)
    .attr("y", -10)
    .attr("width", 700)
    .attr("height", 400)
    .attr("transform", "scale(1.2)")
    .style("display", "none");
var bingF3 = svg.append("image")
    .attr("xlink:href", "imgbing/bingF3.png")
    .attr("x", 350)
    .attr("y", -10)
    .attr("width", 700)
    .attr("height", 400)
    .attr("transform", "scale(1.2)")
    .style("display", "none");
var bingF4 = svg.append("image")
    .attr("xlink:href", "imgbing/bingF4.png")
    .attr("x", 350)
    .attr("y", -10)
    .attr("width", 700)
    .attr("height", 400)
    .attr("transform", "scale(1.2)")
    .style("display", "none");
var bingG = svg.append("image")
    .attr("xlink:href", "imgbing/bingG.png")
    .attr("x", 350)
    .attr("y", -10)
    .attr("width", 700)
    .attr("height", 400)
    .attr("transform", "scale(1.2)")
    .style("display", "none");

//高雨记事簿文字图层
var gao = svg.append("image")
    .attr("xlink:href", "imggao/gao.png")
    .attr("x", 350)
    .attr("y", -10)
    .attr("width", 700)
    .attr("height", 400)
    .attr("transform", "scale(1.2)")
    .style("display", "none");
var gaoA = svg.append("image")
    .attr("xlink:href", "imggao/gaoA.png")
    .attr("x", 350)
    .attr("y", -10)
    .attr("width", 700)
    .attr("height", 400)
    .attr("transform", "scale(1.2)")
    .style("display", "none");
var gaoB1 = svg.append("image")
    .attr("xlink:href", "imggao/gaoB1.png")
    .attr("x", 350)
    .attr("y", -10)
    .attr("width", 700)
    .attr("height", 400)
    .attr("transform", "scale(1.2)")
    .style("display", "none");
var gaoB2 = svg.append("image")
    .attr("xlink:href", "imggao/gaoB2.png")
    .attr("x", 350)
    .attr("y", -10)
    .attr("width", 700)
    .attr("height", 400)
    .attr("transform", "scale(1.2)")
    .style("display", "none");
var gaoB3 = svg.append("image")
    .attr("xlink:href", "imggao/gaoB3.png")
    .attr("x", 350)
    .attr("y", -10)
    .attr("width", 700)
    .attr("height", 400)
    .attr("transform", "scale(1.2)")
    .style("display", "none");
var gaoB4 = svg.append("image")
    .attr("xlink:href", "imggao/gaoB4.png")
    .attr("x", 350)
    .attr("y", -10)
    .attr("width", 700)
    .attr("height", 400)
    .attr("transform", "scale(1.2)")
    .style("display", "none");
var gaoC = svg.append("image")
    .attr("xlink:href", "imggao/gaoC.png")
    .attr("x", 350)
    .attr("y", -10)
    .attr("width", 700)
    .attr("height", 400)
    .attr("transform", "scale(1.2)")
    .style("display", "none");
var gaoD = svg.append("image")
    .attr("xlink:href", "imggao/gaoD.png")
    .attr("x", 350)
    .attr("y", -10)
    .attr("width", 700)
    .attr("height", 400)
    .attr("transform", "scale(1.2)")
    .style("display", "none");
var gaoE1 = svg.append("image")
    .attr("xlink:href", "imggao/gaoE1.png")
    .attr("x", 350)
    .attr("y", -10)
    .attr("width", 700)
    .attr("height", 400)
    .attr("transform", "scale(1.2)")
    .style("display", "none");
var gaoE2 = svg.append("image")
    .attr("xlink:href", "imggao/gaoE2.png")
    .attr("x", 350)
    .attr("y", -10)
    .attr("width", 700)
    .attr("height", 400)
    .attr("transform", "scale(1.2)")
    .style("display", "none");
var gaoE3 = svg.append("image")
    .attr("xlink:href", "imggao/gaoE3.png")
    .attr("x", 350)
    .attr("y", -10)
    .attr("width", 700)
    .attr("height", 400)
    .attr("transform", "scale(1.2)")
    .style("display", "none");
var gaoF = svg.append("image")
    .attr("xlink:href", "imggao/gaoF.png")
    .attr("x", 350)
    .attr("y", -10)
    .attr("width", 700)
    .attr("height", 400)
    .attr("transform", "scale(1.2)")
    .style("display", "none");
var gaoG = svg.append("image")
    .attr("xlink:href", "imggao/gaoG.png")
    .attr("x", 350)
    .attr("y", -10)
    .attr("width", 700)
    .attr("height", 400)
    .attr("transform", "scale(1.2)")
    .style("display", "none");

//朱景平记事簿文字图层
var zhu = svg.append("image")
    .attr("xlink:href", "imgzhu/zhu.png")
    .attr("x", 350)
    .attr("y", -10)
    .attr("width", 700)
    .attr("height", 400)
    .attr("transform", "scale(1.2)")
    .style("display", "none");
var zhuA = svg.append("image")
    .attr("xlink:href", "imgzhu/zhuA.png")
    .attr("x", 350)
    .attr("y", -10)
    .attr("width", 700)
    .attr("height", 400)
    .attr("transform", "scale(1.2)")
    .style("display", "none");
var zhuB1 = svg.append("image")
    .attr("xlink:href", "imgzhu/zhuB1.png")
    .attr("x", 350)
    .attr("y", -10)
    .attr("width", 700)
    .attr("height", 400)
    .attr("transform", "scale(1.2)")
    .style("display", "none");
var zhuB2 = svg.append("image")
    .attr("xlink:href", "imgzhu/zhuB2.png")
    .attr("x", 350)
    .attr("y", -10)
    .attr("width", 700)
    .attr("height", 400)
    .attr("transform", "scale(1.2)")
    .style("display", "none");
var zhuB3 = svg.append("image")
    .attr("xlink:href", "imgzhu/zhuB3.png")
    .attr("x", 350)
    .attr("y", -10)
    .attr("width", 700)
    .attr("height", 400)
    .attr("transform", "scale(1.2)")
    .style("display", "none");
var zhuB4 = svg.append("image")
    .attr("xlink:href", "imgzhu/zhuB4.png")
    .attr("x", 350)
    .attr("y", -10)
    .attr("width", 700)
    .attr("height", 400)
    .attr("transform", "scale(1.2)")
    .style("display", "none");
var zhuC = svg.append("image")
    .attr("xlink:href", "imgzhu/zhuC.png")
    .attr("x", 350)
    .attr("y", -10)
    .attr("width", 700)
    .attr("height", 400)
    .attr("transform", "scale(1.2)")
    .style("display", "none");
var zhuD1 = svg.append("image")
    .attr("xlink:href", "imgzhu/zhuD1.png")
    .attr("x", 350)
    .attr("y", -10)
    .attr("width", 700)
    .attr("height", 400)
    .attr("transform", "scale(1.2)")
    .style("display", "none");
var zhuD2 = svg.append("image")
    .attr("xlink:href", "imgzhu/zhuD2.png")
    .attr("x", 350)
    .attr("y", -10)
    .attr("width", 700)
    .attr("height", 400)
    .attr("transform", "scale(1.2)")
    .style("display", "none");
var zhuD3 = svg.append("image")
    .attr("xlink:href", "imgzhu/zhuD3.png")
    .attr("x", 350)
    .attr("y", -10)
    .attr("width", 700)
    .attr("height", 400)
    .attr("transform", "scale(1.2)")
    .style("display", "none");
var zhuE1 = svg.append("image")
    .attr("xlink:href", "imgzhu/zhuE1.png")
    .attr("x", 350)
    .attr("y", -10)
    .attr("width", 700)
    .attr("height", 400)
    .attr("transform", "scale(1.2)")
    .style("display", "none");
var zhuE2 = svg.append("image")
    .attr("xlink:href", "imgzhu/zhuE2.png")
    .attr("x", 350)
    .attr("y", -10)
    .attr("width", 700)
    .attr("height", 400)
    .attr("transform", "scale(1.2)")
    .style("display", "none");
var zhuE3 = svg.append("image")
    .attr("xlink:href", "imgzhu/zhuE3.png")
    .attr("x", 350)
    .attr("y", -10)
    .attr("width", 700)
    .attr("height", 400)
    .attr("transform", "scale(1.2)")
    .style("display", "none");
var zhuF1 = svg.append("image")
    .attr("xlink:href", "imgzhu/zhuF1.png")
    .attr("x", 350)
    .attr("y", -10)
    .attr("width", 700)
    .attr("height", 400)
    .attr("transform", "scale(1.2)")
    .style("display", "none");
var zhuF2 = svg.append("image")
    .attr("xlink:href", "imgzhu/zhuF2.png")
    .attr("x", 350)
    .attr("y", -10)
    .attr("width", 700)
    .attr("height", 400)
    .attr("transform", "scale(1.2)")
    .style("display", "none");
var zhuF3 = svg.append("image")
    .attr("xlink:href", "imgzhu/zhuF3.png")
    .attr("x", 350)
    .attr("y", -10)
    .attr("width", 700)
    .attr("height", 400)
    .attr("transform", "scale(1.2)")
    .style("display", "none");
var zhuF4 = svg.append("image")
    .attr("xlink:href", "imgzhu/zhuF4.png")
    .attr("x", 350)
    .attr("y", -10)
    .attr("width", 700)
    .attr("height", 400)
    .attr("transform", "scale(1.2)")
    .style("display", "none");
var zhuG = svg.append("image")
    .attr("xlink:href", "imgzhu/zhuG.png")
    .attr("x", 350)
    .attr("y", -10)
    .attr("width", 700)
    .attr("height", 400)
    .attr("transform", "scale(1.2)")
    .style("display", "none");

function resetImages() {
    d3.selectAll("image")
        .filter(function() {
            return this !== backgroundImage.node() && this !== notebookImage.node();
        })
        .style("display", "none");
}

// 函数用于显示指定的滑杆，并隐藏其他滑杆
function showSlider(sliderId) {
    var sliders = document.querySelectorAll("input[type=range]"); // 获取所有的滑杆元素
    sliders.forEach(function(slider) {
        if (slider.id === sliderId) {
            slider.style.display = "block";
        } else {
            slider.style.display = "none";
        }
    });
    resetImages(); // 重置图像显示状态
    updateSliderImages(sliderId); // 更新图像显示状态
}

// 更新图像显示状态的函数
function updateSliderImages(sliderId) {
    var slider = d3.select("#" + sliderId);
    slider.dispatch("input");
}

// 获取饼饼滑杆元素
var slider = d3.select("#bingbing");
// 添加监听器
slider.on("input", function() {
    var value = +this.value;
    // 监听高光图层
    const valuestoSingle4 = [1, 6, 7, 8, 9, 10, 11, 12]
    if (valuestoSingle4.includes(value)) {
        single4.style("display", "block");
    } else {
        single4.style("display", "none");
    }
    const valuestoSingle6 = [2, 3, 4, 5, 7, 8, 9, 10, 11, 12]
    if (valuestoSingle6.includes(value)) {
        single6.style("display", "block");
    } else {
        single6.style("display", "none");
    }
    const valuestoSingle3 = [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]
    if (valuestoSingle3.includes(value)) {
        single3.style("display", "block");
    } else {
        single3.style("display", "none");
    }

    // 监听记事簿
    if (value === 0) {
        bing.style("display", "block");
    } else {
        bing.style("display", "none");
    }
    if (value === 1) {
        bingA.style("display", "block");
    } else {
        bingA.style("display", "none");
    }
    if (value === 2) {
        bingB1.style("display", "block");
    } else {
        bingB1.style("display", "none");
    }
    if (value === 3) {
        bingB2.style("display", "block");
    } else {
        bingB2.style("display", "none");
    }
    if (value === 4) {
        bingB3.style("display", "block");
    } else {
        bingB3.style("display", "none");
    }
    if (value === 5) {
        bingB4.style("display", "block");
    } else {
        bingB4.style("display", "none");
    }
    if (value === 6) {
        bingC.style("display", "block");
    } else {
        bingC.style("display", "none");
    }
    if (value === 7 || value === 8) {
        bingD1.style("display", "block");
    } else {
        bingD1.style("display", "none");
    }
    if (value === 9 || value === 10) {
        bingDE.style("display", "block");
    } else {
        bingDE.style("display", "none");
    }
    if (value === 11 || value === 12) {
        bingE3.style("display", "block");
    } else {
        bingE3.style("display", "none");
    }
    if (value === 13) {
        bingF1.style("display", "block");
    } else {
        bingF1.style("display", "none");
    }
    if (value === 14) {
        bingF2.style("display", "block");
    } else {
        bingF2.style("display", "none");
    }
    if (value === 15) {
        bingF3.style("display", "block");
    } else {
        bingF3.style("display", "none");
    }
    if (value === 16) {
        bingF4.style("display", "block");
    } else {
        bingF4.style("display", "none");
    }
    const valuestoG = [17, 18, 19, 20, 21, 22, 23, 24]
    if (valuestoG.includes(value)) {
        bingG.style("display", "block");
    } else {
        bingG.style("display", "none");
    }
});


// 获取高雨滑杆元素
var slider = d3.select("#gaoyu");
slider.on("input", function() {
    var value = +this.value;
    const valuestoSingle5 = [1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
    if (valuestoSingle5.includes(value)) {
        single5.style("display", "block");
    } else {
        single5.style("display", "none");
    }
    const valuestoSingle4 = [6, 10, 11, 12]
    if (valuestoSingle4.includes(value)) {
        single4.style("display", "block");
    } else {
        single4.style("display", "none");
    }
    const valuestoSingle3 = [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]
    if (valuestoSingle3.includes(value)) {
        single3.style("display", "block");
    } else {
        single3.style("display", "none");
    }

    // 监听记事簿
    if (value === 0) {
        gao.style("display", "block");
    } else {
        gao.style("display", "none");
    }
    if (value === 1) {
        gaoA.style("display", "block");
    } else {
        gaoA.style("display", "none");
    }
    if (value === 2) {
        gaoB1.style("display", "block");
    } else {
        gaoB1.style("display", "none");
    }
    if (value === 3) {
        gaoB2.style("display", "block");
    } else {
        gaoB2.style("display", "none");
    }
    if (value === 4) {
        gaoB3.style("display", "block");
    } else {
        gaoB3.style("display", "none");
    }
    if (value === 5) {
        gaoB4.style("display", "block");
    } else {
        gaoB4.style("display", "none");
    }
    if (value === 6) {
        gaoC.style("display", "block");
    } else {
        gaoC.style("display", "none");
    }
    const valuestoD = [7, 8, 9]
    if (valuestoD.includes(value)) {
        gaoD.style("display", "block");
    } else {
        gaoD.style("display", "none");
    }
    if (value === 10) {
        gaoE1.style("display", "block");
    } else {
        gaoE1.style("display", "none");
    }
    if (value === 11) {
        gaoE2.style("display", "block");
    } else {
        gaoE2.style("display", "none");
    }
    if (value === 12) {
        gaoE3.style("display", "block");
    } else {
        gaoE3.style("display", "none");
    }
    const valuestoF = [13, 14, 15, 16]
    if (valuestoF.includes(value)) {
        gaoF.style("display", "block");
    } else {
        gaoF.style("display", "none");
    }
    const valuestoG = [17, 18, 19, 20, 21, 22, 23, 24]
    if (valuestoG.includes(value)) {
        gaoG.style("display", "block");
    } else {
        gaoG.style("display", "none");
    }
});

// 获取朱景平滑杆元素
var slider = d3.select("#zhujingping");
slider.on("input", function() {
    var value = +this.value;
    if (value === 6) {
        single4.style("display", "block");
    } else {
        single4.style("display", "none");
    }
    const valuestoSingle1 = [1, 2, 3, 4, 5, 10, 11, 12, 13, 14, 15, 16]
    if (valuestoSingle1.includes(value)) {
        single1.style("display", "block");
    } else {
        single1.style("display", "none");
    }
    const valuestoSingle6 = [2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
    if (valuestoSingle6.includes(value)) {
        single6.style("display", "block");
    } else {
        single6.style("display", "none");
    }
    const valuestoSingle5 = [7, 8, 9]
    if (valuestoSingle5.includes(value)) {
        single5.style("display", "block");
    } else {
        single5.style("display", "none");
    }
    const valuestoSingle2 = [17, 18, 19, 20, 21, 22, 23, 24]
    if (valuestoSingle2.includes(value)) {
        single2.style("display", "block");
    } else {
        single2.style("display", "none");
    }

    // 监听记事簿
    if (value === 0) {
        zhu.style("display", "block");
    } else {
        zhu.style("display", "none");
    }
    if (value === 1) {
        zhuA.style("display", "block");
    } else {
        zhuA.style("display", "none");
    }
    if (value === 2) {
        zhuB1.style("display", "block");
    } else {
        zhuB1.style("display", "none");
    }
    if (value === 3) {
        zhuB2.style("display", "block");
    } else {
        zhuB2.style("display", "none");
    }
    if (value === 4) {
        zhuB3.style("display", "block");
    } else {
        zhuB3.style("display", "none");
    }
    if (value === 5) {
        zhuB4.style("display", "block");
    } else {
        zhuB4.style("display", "none");
    }
    if (value === 6) {
        zhuC.style("display", "block");
    } else {
        zhuC.style("display", "none");
    }
    if (value === 7) {
        zhuD1.style("display", "block");
    } else {
        zhuD1.style("display", "none");
    }
    if (value === 8) {
        zhuD2.style("display", "block");
    } else {
        zhuD2.style("display", "none");
    }
    if (value === 9) {
        zhuD3.style("display", "block");
    } else {
        zhuD3.style("display", "none");
    }
    if (value === 10) {
        zhuE1.style("display", "block");
    } else {
        zhuE1.style("display", "none");
    }
    if (value === 11) {
        zhuE2.style("display", "block");
    } else {
        zhuE2.style("display", "none");
    }
    if (value === 12) {
        zhuE3.style("display", "block");
    } else {
        zhuE3.style("display", "none");
    }
    if (value === 13) {
        zhuF1.style("display", "block");
    } else {
        zhuF1.style("display", "none");
    }
    if (value === 14) {
        zhuF2.style("display", "block");
    } else {
        zhuF2.style("display", "none");
    }
    if (value === 15) {
        zhuF3.style("display", "block");
    } else {
        zhuF3.style("display", "none");
    }
    if (value === 16) {
        zhuF4.style("display", "block");
    } else {
        zhuF4.style("display", "none");
    }
    const valuestoG = [17, 18, 19, 20, 21, 22, 23, 24]
    if (valuestoG.includes(value)) {
        zhuG.style("display", "block");
    } else {
        zhuG.style("display", "none");
    }
});


//时间函数
function updateTime(value) {
    var displayValue = document.querySelector('.value');
    if (value < 18) {
        hours = parseInt(value) + 6;
    } else {
        hours = parseInt(value) - 18;
    }
    if (hours === 7) {
        displayValue.textContent = hours + ":30";
    } else {
        displayValue.textContent = hours + ":00";
    }
}