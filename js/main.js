// 导航
document.addEventListener('DOMContentLoaded', function () {
    const navItems = document.querySelectorAll('.nav-item');
    const progressLineFill = document.querySelector('.progressLine__fill');
    const sections = document.querySelectorAll('.section');
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const body = document.body;
    const navigation = document.getElementById('navigation');
    const avatars = document.querySelectorAll('.avatar img');

    function updateProgress() {
        const scrollTop = window.scrollY;
        const scrollFraction = scrollTop / totalHeight;
        progressLineFill.style.height = `${scrollFraction * 100}%`;
    }

    function updateActiveSection() {
        let index = sections.length - 1;

        while (index >= 0) {
            const section = sections[index];
            const sectionRect = section.getBoundingClientRect();

            if (sectionRect.top <= window.innerHeight / 2) {
                break;
            }

            index--;
        }

        navItems.forEach((item, idx) => {
            if (idx === index) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });

        updateTheme(index);
    }

    function updateTheme(index) {
        if (index === 4 || index === 5) {
            navigation.style.color = '#000';
            progressLineFill.style.background = '#000';
            navItems.forEach(item => {
                item.classList.add('light-theme');
                item.classList.remove('dark-theme');
            });
            avatars.forEach(img => {
                img.classList.add('light-theme');
            });
        } else {
            navigation.style.color = '#FFFFFE';
            progressLineFill.style.background = '#FFFFFE';
            navItems.forEach(item => {
                item.classList.add('dark-theme');
                item.classList.remove('light-theme');
            });
            avatars.forEach(img => {
                img.classList.remove('light-theme');
            });
        }
    }

    window.addEventListener('scroll', () => {
        updateProgress();
        updateActiveSection();
    });

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const sectionId = item.getAttribute('data-section');
            const section = document.getElementById(`section${sectionId}`);
            window.scrollTo({
                top: section.offsetTop,
                behavior: 'smooth'
            });
        });

        item.addEventListener('mouseover', () => {
            item.classList.add('hover');
        });

        item.addEventListener('mouseout', () => {
            item.classList.remove('hover');
        });
    });

    updateProgress();
    updateActiveSection();
});

// depression
document.addEventListener('DOMContentLoaded', function () {
    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                initECharts();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    var chartElement = document.getElementById('main_depression_one_year');
    observer.observe(chartElement);

    function initECharts() {
        var chartDom = document.getElementById('main_depression_one_year');
        var myChart = echarts.init(chartDom);
        var option = {
            xAxis: {
                type: 'value',
                name: 'Stage',
                nameLocation: 'middle',
                nameTextStyle: {
                    fontSize: 16,
                    fontWeight: 'bold',
                    padding: [25, 0, 0, 0]
                },
                axisLabel: {
                    fontWeight: 'bold',
                    color: 'white',
                    fontSize: 12,
                    formatter: function (value) {
                        const labels = ['Before Residency', 'After 3 Months', 'After 6 Months', 'After 9 months', 'After 12 months'];
                        return labels[value];
                    },
                    interval: 1
                },
                min: 0,
                max: 4,
                axisLine: {
                    lineStyle: {
                        width: 3,
                        color: 'white'
                    }
                }
            },
            yAxis: {
                type: 'value',
                name: 'Depression Rates',
                nameTextStyle: {
                    fontSize: 16,
                    color: 'white',
                    fontWeight: 'bold',
                    padding: [0, 0, 10, 0]
                },
                axisLabel: {
                    fontWeight: 'bold',
                    color: 'white',
                    fontSize: 12,
                    formatter: '{value} %'
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        width: 3,
                        color: 'white'
                    }
                },
                axisTick: {
                    show: true,
                    length: 6
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        type: 'dashed',
                        width: 2
                    }
                }
            },
            series: [{
                data: [
                    [0, 9.1],
                    [1, 21.1],
                    [2, 25.7],
                    [3, 23.4],
                    [4, 35.1]
                ],
                type: 'line',
                smooth: true,
                lineStyle: {
                    width: 4,
                    color: '#C37373'
                },
                label: {
                    show: true,
                    color: 'white',
                    fontSize: 13,
                    fontWeight: 'bold',
                    position: 'bottom',
                    formatter: '{@[1]}%'
                }
            }]
        };
        myChart.setOption(option);
    }
});


// document.addEventListener('DOMContentLoaded', function () {
//   const coverSlide = document.getElementById('cover-slide1');
//   const coverImg1 = document.getElementById('cover-img1');
//   const vh = window.innerHeight;

//   //封面-规培生之困
//   window.addEventListener('scroll', function () {
//     const scrollTop = window.scrollY;
//     const coverSlideOffsetTop = coverSlide.offsetTop;
//     const coverSlideTop = scrollTop - coverSlideOffsetTop;

//     if (coverSlideTop >= 0 && coverSlideTop < 0.5 * vh) {
//       coverImg1.style.backgroundImage = "url('../image/poster_main.png')";
//       // console.log('cover1');
//     } else if (coverSlideTop >= 0.5 * vh && coverSlideTop < 1.5 * vh) {
//       coverImg1.style.backgroundImage = "url('../image/poster_main2.png')";
//       // console.log('cover2');
//     }

//     const introduction3 = document.getElementById("introduction3");
//     const doorImg = document.getElementById("door-img");
//     const opacity = window.getComputedStyle(introduction3).opacity;
//     // console.log(opacity);
//     if (opacity === '1') {
//       doorImg.style.backgroundImage = "url('../image/door/open.png')";
//       // console.log("open");
//     } else {
//       doorImg.style.backgroundImage = "url('../image/door/close.png')";
//       // console.log("close");
//     }

//   });
// });

// 引子文字

document.addEventListener('DOMContentLoaded', function () {
    const coverSlide = document.getElementById('cover-slide1');
    const coverImg1 = document.getElementById('cover-img1');
    const vh = window.innerHeight;

    // 动态获取基路径
    const basePath = window.location.origin + window.location.pathname.substring(0, window.location.pathname.lastIndexOf('/'));

    //封面-规培生之困
    window.addEventListener('scroll', function () {
        const scrollTop = window.scrollY;
        const coverSlideOffsetTop = coverSlide.offsetTop;
        const coverSlideTop = scrollTop - coverSlideOffsetTop;

        if (coverSlideTop >= 0 && coverSlideTop < 0.5 * vh) {
            coverImg1.style.backgroundImage = `url('${basePath}/image/poster_main.png')`;
            // console.log('cover1');
        } else if (coverSlideTop >= 0.5 * vh && coverSlideTop < 1.5 * vh) {
            coverImg1.style.backgroundImage = `url('${basePath}/image/poster_main2.png')`;
            // console.log('cover2');
        }

        const introduction3 = document.getElementById("introduction3");
        const doorImg = document.getElementById("door-img");
        const opacity = window.getComputedStyle(introduction3).opacity;
        // console.log(opacity);
        if (opacity === '1') {
            doorImg.style.backgroundImage = `url('${basePath}/image/door/open.png')`;
            // console.log("open");
        } else {
            doorImg.style.backgroundImage = `url('${basePath}/image/door/close.png')`;
            // console.log("close");
        }

    });
});



var controller1 = new ScrollMagic.Controller();
var scene1 = new ScrollMagic.Scene({
    triggerElement: "#text-introduction",
    triggerHook: 0.15
})
    .setVelocity("#introduction1", { opacity: 1, translateY: "-20px" }, { duration: 1000 })
    // .addIndicators({ name: "引子文字1" })
    .addTo(controller1);

var scene2 = new ScrollMagic.Scene({
    triggerElement: "#text-introduction",
    triggerHook: 0.15,
    offset: 200
})
    .setVelocity("#introduction2", { opacity: 1, translateY: "-20px" }, { duration: 1000 })
    .addTo(controller1);

var scene3 = new ScrollMagic.Scene({
    triggerElement: "#text-introduction",
    triggerHook: 0.15,
    offset: 400
})
    .setVelocity("#introduction3", { opacity: 1, translateY: "-20px" }, { duration: 1000 })
    .addTo(controller1);

var scene4 = new ScrollMagic.Scene({
    triggerElement: "#text-introduction",
    triggerHook: 0.15,
    offset: 600 // Offset to trigger after 100px scrolling past #introduction3
})
    .setVelocity("#introduction4", { opacity: 1, translateY: "-20px" }, { duration: 1000 })
    .addTo(controller1);

var scene5 = new ScrollMagic.Scene({
    triggerElement: "#text-introduction",
    triggerHook: 0.15,
    offset: 800 // Offset to trigger after 100px scrolling past #introduction3
})
    .setVelocity("#phone", { opacity: 1, translateY: "-20px" }, { duration: 1200 })
    .addTo(controller1);

// 引子文字固定
var scene6 = new ScrollMagic.Scene({
    triggerElement: "#text-introduction",
    duration: "110%",
    triggerHook: 0.15
})
    .setPin("#text-introduction")
    // .addIndicators({ name: "text-introduction" })
    .addTo(controller1);

// 图表浮现
$('.chart').each(function () {

    var scene7 = new ScrollMagic.Scene({
        triggerElement: this,
        triggerHook: 0.7
    })
        .setVelocity(this, { opacity: 1, translateY: "-20px" }, { duration: 500 })
        // .addIndicators({
        //   name: "chart"
        // })
        .addTo(controller1);
})
// 这不是唯一的自杀事件
var scene8 = new ScrollMagic.Scene({
    triggerElement: "#pinned1",
    triggerHook: 0.6,
})
    .setVelocity("#pinned1", { opacity: 1, translateY: "-20px" }, { duration: 500 })
    .addTo(controller1);

// 封面浮现
$('.cover-slide').each(function () {

    var scene9 = new ScrollMagic.Scene({
        triggerElement: this,
        triggerHook: 0.2,
        duration: "90%"
    })
        .setClassToggle(this, 'cover-slide-fade-in')
        // .addIndicators({
        //   name: "cover"
        // })
        .addTo(controller1);
})
var scene13 = new ScrollMagic.Scene({
    triggerElement: "#cover-slide5",
    triggerHook: 0.2,
})
    .setClassToggle('#cover-slide5', 'cover-slide-fade-in')
    // .addIndicators({
    //   name: "cover"
    // })
    .addTo(controller1);

// suicide-slide浮现
var scene10 = new ScrollMagic.Scene({
    triggerElement: "#suicide-slide",
    triggerHook: 0.2,
})
    .setVelocity("#suicide-slide", { opacity: 1 }, { duration: 500 })
    .addTo(controller1);

//hint-avatar
var scene20 = new ScrollMagic.Scene({
    triggerElement: "#content1",
    triggerHook: 0,
    duration: 500
})
    .setClassToggle("#hint-avatar", 'show-up')
    // .addIndicators({
    //   name: "hint"
    // })
    .addTo(controller1);

var scene21 = new ScrollMagic.Scene({
    triggerElement: "#content1",
    triggerHook: 0,
    offset: 900
})
    .setClassToggle("#hint-avatar", 'delete')
    // .addIndicators({
    //   name: "hint"
    // })
    .addTo(controller1);

//新闻剪报出现
var scene22 = new ScrollMagic.Scene({
    triggerElement: "#newspaper-background",
    triggerHook: 0.3
})
    .setVelocity("#newspaper-background", { opacity: 1, translateY: "-20px" }, { duration: 500 })
    .addTo(controller1);

// 抑郁率
document.addEventListener('DOMContentLoaded', function () {
    const initialCtx = document.getElementById('initialChart').getContext('2d');
    const detailedCtx = document.getElementById('detailedChart').getContext('2d');
    const initialChartContainer = document.getElementById('initialChartContainer');
    const detailedChartContainer = document.getElementById('detailedChartContainer');

    if (!initialCtx || !detailedCtx) {
        // console.error('Canvas context not found'); // debug
    }

    const initialData = {
        labels: ['Diagnosed with Depression', 'No Diagnosis of Depression'],
        datasets: [{
            data: [60.6, 39.4],
            backgroundColor: ['#6890A2', '#ffffe0'],
            hoverBackgroundColor: ['#65001a', '#EEE1C3'],
            borderColor: ['black'],
            borderWidth: 4
        }]
    };

    const detailedData = {
        labels: ['Mild', 'Moderate', 'Severe '],
        datasets: [{
            data: [42.5, 42.5, 15],
            backgroundColor: ['#ff95a4', '#a84759', '#4f0013'],
            borderColor: ['black'],
            borderWidth: 2
        }]
    };

    const initialChart = new Chart(initialCtx, {
        type: 'pie',
        data: initialData,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                    labels: {
                        color: 'white',
                        font: {
                            size: 20,
                            family: 'Siyuan-bold',
                        }
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function (context) {
                            let label = context.label || '';
                            if (label) {
                                label += ': ';
                            }
                            label += context.raw + '%';
                            return label;
                        }
                    },
                    titleFont: {
                        size: 0,
                        family: 'Siyuan-regular'
                    },
                    bodyFont: {
                        size: 25,
                        family: 'Siyuan-regular'
                    }
                }
            }
        }
    });

    let detailedChart;
    let isDetailChartVisible = false;
    let hideTimeout;

    // 处理鼠标悬停
    document.getElementById('initialChart').addEventListener('mousemove', function (evt) {
        // console.log('Mouseover event triggered');
        clearTimeout(hideTimeout); // 清除隐藏延时
        const points = initialChart.getElementsAtEventForMode(evt, 'nearest', { intersect: true }, true);

        if (points.length) {
            const firstPoint = points[0];
            const label = initialChart.data.labels[firstPoint.index];
            if (label === 'Diagnosed with Depression') {
                // console.log('Adding active class to detailedChart');
                detailedChartContainer.classList.remove('fade-out');
                detailedChartContainer.classList.add('active');
                initialChartContainer.classList.add('move-left');
                isDetailChartVisible = true;
                if (!detailedChart) {
                    detailedChart = new Chart(detailedCtx, {
                        type: 'pie',
                        data: detailedData,
                        options: {
                            responsive: true,
                            animation: {
                                duration: 0
                            },
                            plugins: {
                                legend: {
                                    position: 'top',
                                    labels: {
                                        color: 'white',
                                        font: {
                                            size: 18,
                                            family: 'Siyuan-regular'
                                        }
                                    }
                                },
                                tooltip: {
                                    enabled: false
                                },
                                datalabels: {
                                    display: true,
                                    color: 'white',
                                    font: {
                                        size: 15,
                                        family: 'Siyuan-regular'
                                    },
                                    formatter: (value, context) => {
                                        let sum = context.chart.data.datasets[0].data.reduce((a, b) => a + b, 0);
                                        let percentage = (value / sum * 100).toFixed(2) + '%';
                                        return percentage;
                                    }
                                }
                            }
                        },
                        plugins: [ChartDataLabels] // 引入插件
                    });
                }
            } else if (label === 'No Diagnosis of Depression' || isDetailChartVisible) {
                detailedChartContainer.classList.add('fade-out');
                hideTimeout = setTimeout(() => {
                    detailedChartContainer.classList.remove('active');
                    initialChartContainer.classList.remove('move-left');
                    // console.log('Removing active class from detailedChart');
                    isDetailChartVisible = false;
                }, 800);
            }
        }
    });

    // 处理鼠标离开初始图表时的逻辑
    document.getElementById('initialChart').addEventListener('mouseleave', function () {
        // console.log('Mouseleave event triggered');
        if (isDetailChartVisible) {
            detailedChartContainer.classList.add('fade-out');
            hideTimeout = setTimeout(() => {
                detailedChartContainer.classList.remove('active');
                initialChartContainer.classList.remove('move-left');
                // console.log('Mouse leave, removing active class from detailedChart');
                isDetailChartVisible = false;
            }, 800);
        }
    });

    // 移除 fade-out 类以便在下次悬停时可以正确显示
    document.getElementById('initialChart').addEventListener('mouseover', function () {
        if (isDetailChartVisible) {
            detailedChartContainer.classList.remove('fade-out');
        }
    });
});

//收入
document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM fully loaded and parsed');
    const initialCtx = document.getElementById('initialChart2').getContext('2d');
    const detailedCtx = document.getElementById('detailedChart2').getContext('2d');
    if (!initialCtx || !detailedCtx) {
        console.error('Canvas context not found'); // debug
    }

    const initialData = {
        labels: ['over 3000¥', '2000-2999¥', '1000-1999¥', '500-999¥', 'under 500¥', 'no salary'],
        datasets: [{
            data: [32.3, 23.7, 16.5, 11.8, 7.7, 8],
            backgroundColor: ['#bce6f9', '#92bacd', '#6991a3', '#41697a', '#194454', '#00212f'],
            hoverBackgroundColor: '#65001a',
            borderColor: ['black'],
            borderWidth: 4
        }]
    };

    const detailedData = {
        labels: [''],
        datasets: [{
            label: 'Social Residency',
            data: [50.63],
            backgroundColor: '#ff95a4',
            borderColor: 'black',
            borderWidth: 2
        }, {
            label: 'Sponsored Residency',
            data: [44.94],
            backgroundColor: '#a84759',
            borderColor: 'black',
            borderWidth: 2
        }, {
            label: 'SMR students',
            data: [4.43],
            backgroundColor: '#4f0013',
            borderColor: 'black',
            borderWidth: 2
        }]
    };
    const initialChart = new Chart(initialCtx, {
        type: 'pie',
        data: initialData,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                    labels: {
                        color: 'white',
                        font: {
                            size: 20,
                            family: 'Siyuan-regular',
                            weight: 'bold'
                        }
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function (context) {
                            return context.raw + '%';
                        }
                    },
                    titleFont: {
                        size: 20,
                        family: 'Siyuan-regular',
                        weight: 'bold'
                    },
                    bodyFont: {
                        size: 20,
                        family: 'Siyuan-regular',
                        weight: 'bold'
                    }
                }
            }
        }
    });

    let detailedChart;
    let isDetailChartVisible = false;
    let hideTimeout;

    // 处理鼠标悬停
    document.getElementById('initialChart2').addEventListener('mousemove', function (evt) {
        console.log('Mouseover event triggered');
        clearTimeout(hideTimeout); // 清除隐藏延时
        const points = initialChart.getElementsAtEventForMode(evt, 'nearest', { intersect: true }, true);

        if (points.length) {
            const firstPoint = points[0];
            const label = initialChart.data.labels[firstPoint.index];
            if (label === 'over 3000¥') {
                console.log('Adding active class to detailedChart');
                document.getElementById('detailedChartContainer1').classList.remove('fade-out');
                document.getElementById('detailedChartContainer1').classList.add('active');
                isDetailChartVisible = true;
                if (!detailedChart) {
                    detailedChart = new Chart(detailedCtx, {
                        type: 'bar',
                        data: detailedData,
                        options: {
                            responsive: true,
                            layout: {
                                padding: { right: 30 }
                            },
                            indexAxis: 'y', // 将图表转换为横向条形图
                            scales: {
                                x: {
                                    stacked: true, // 启用堆叠选项
                                    beginAtZero: true,
                                    title: {
                                        display: true,
                                        text: 'Distribution of Residencies Earning Over 3,000¥ Monthly',
                                        color: 'white',
                                        font: {
                                            size: 15,
                                            family: 'impact'
                                        }
                                    },
                                    ticks: {
                                        color: 'white',
                                        font: {
                                            size: 15,
                                            family: 'Siyuan-regular',
                                            weight: 'bold'
                                        }
                                    }
                                },
                                y: {
                                    stacked: true, // 启用堆叠选项
                                    beginAtZero: true,
                                    // title: {
                                    //     display: true,
                                    //     text: '月薪3000元以上人员分布',
                                    //     color: 'white',
                                    //     font: {
                                    //         size: 15,
                                    //         family: 'SourceHanSerifCN',
                                    //         weight: 'bold'
                                    //     }
                                    // },
                                    ticks: {
                                        font: {
                                            size: 15,
                                            family: 'Siyuan-regular',
                                            weight: 'bold'
                                        },
                                        color: 'white'
                                    }
                                }
                            },
                            plugins: {
                                legend: {
                                    display: true, // 显示图例
                                    position: 'top',
                                    labels: {
                                        color: 'white',
                                        font: {
                                            size: 15,
                                            family: 'Siyuan-regular',
                                            weight: 'bold'
                                        }
                                    }
                                },
                                tooltip: {
                                    enabled: true
                                },
                                datalabels: {
                                    display: true,
                                    color: 'white',
                                    font: {
                                        size: 20,
                                        family: 'Siyuan-regular',
                                        weight: 'bold'
                                    },
                                    anchor: 'center',
                                    align: 'center',
                                    formatter: (value, context) => {
                                        let sum = context.chart.data.datasets.map(dataset => dataset.data[0]).reduce((a, b) => a + b, 0);
                                        let percentage = (value / sum * 100).toFixed(2) + '%';
                                        return percentage;
                                    }
                                }
                            }
                        },
                        plugins: [ChartDataLabels] // 引入插件
                    });
                }
            } else if (label === 'over 3000¥' || isDetailChartVisible) {
                document.getElementById('detailedChartContainer1').classList.add('fade-out');
                hideTimeout = setTimeout(() => {
                    document.getElementById('detailedChartContainer1').classList.remove('active');
                    console.log('Removing active class from detailedChart');
                    isDetailChartVisible = false;
                }, 800);
            }
        }
    });

    // 处理鼠标离开初始图表时的逻辑
    document.getElementById('initialChart2').addEventListener('mouseleave', function () {
        console.log('Mouseleave event triggered');
        if (isDetailChartVisible) {
            document.getElementById('detailedChartContainer1').classList.add('fade-out');
            hideTimeout = setTimeout(() => {
                document.getElementById('detailedChartContainer1').classList.remove('active');
                console.log('Mouse leave, removing active class from detailedChart');
                isDetailChartVisible = false;
            }, 800);
        }
    });

    // 移除 fade-out 类以便在下次悬停时可以正确显示
    document.getElementById('initialChart2').addEventListener('mouseover', function () {
        if (isDetailChartVisible) {
            document.getElementById('detailedChartContainer1').classList.remove('fade-out');
        }
    });
});






// nightmare-text
$('.nightmare-text').each(function () {

    var scene11 = new ScrollMagic.Scene({
        triggerElement: this,
        triggerHook: 0.6,
        duration: '20%'
    })
        .setClassToggle(this, 'fade-in')
        // .addIndicators({
        //   name: "nightmare-text"
        // })
        .addTo(controller1);
})

// choice
$('.choice-text').each(function () {

    var scene11 = new ScrollMagic.Scene({
        triggerElement: this,
        triggerHook: 0.5,
        duration: '50%'
    })
        .setClassToggle(this, 'fade-in')
        // .addIndicators({
        //   name: "nightmare-text"
        // })
        .addTo(controller1);
})

var scene12 = new ScrollMagic.Scene({
    triggerElement: "#choice-img-slide",
    triggerHook: 0.2,
})
    .setClassToggle("#choice-img-slide", 'fade-in')
    // .addIndicators({
    //   name: "cover"
    // })
    .addTo(controller1);

var scene13 = new ScrollMagic.Scene({
    triggerElement: "#choice-img-slide",
    triggerHook: 0.1,
})
    .setClassToggle("#stair1", 'fade-in')
    // .addIndicators({
    //   name: "stair1"
    // })
    .addTo(controller1);

var scene14 = new ScrollMagic.Scene({
    triggerElement: "#choice2",
    triggerHook: 0.7,
})
    .setClassToggle("#stair2", 'fade-in')
    .addTo(controller1);

var scene15 = new ScrollMagic.Scene({
    triggerElement: "#choice3",
    triggerHook: 0.7,
})
    .setClassToggle("#stair3", 'fade-in')
    .addTo(controller1);

var scene15 = new ScrollMagic.Scene({
    triggerElement: "#choice4",
    triggerHook: 0.7,
})
    .setClassToggle("#stair4", 'fade-in')
    .addTo(controller1);

// oneday 固定
var scene17 = new ScrollMagic.Scene({
    triggerElement: "#oneday",
    triggerHook: 0.5
})
    .setClassToggle("#oneday", 'fade-in')
    .addTo(controller1);

var scene16 = new ScrollMagic.Scene({
    triggerElement: "#oneday",
    duration: "100%",
    triggerHook: 0
})
    .setPin("#oneday")
    .addTo(controller1);

// treemap

// treemap-text逐句浮现
$('.treemap-text').each(function () {

    var scene29 = new ScrollMagic.Scene({
        triggerElement: this,
        triggerHook: 0.4,
        duration: '20%'
    })
        .setClassToggle(this, 'fade-in')
        // .addIndicators({ name: "treemap-text" })
        .addTo(controller1);
})


var scene30 = new ScrollMagic.Scene({
    triggerElement: '#treemap-text5',
    triggerHook: 0.4,
})
    .setClassToggle('#treemap-text5', 'fade-in')
    // .addIndicators({ name: "treemap-text5" })
    .addTo(controller1);

var scene23 = new ScrollMagic.Scene({
    triggerElement: "#treemap-text1",
    triggerHook: 0.4,
})
    .setClassToggle("#treemap-img1", 'fade-in')
    // .addIndicators({ name: "tree1" })
    .addTo(controller1);

var scene24 = new ScrollMagic.Scene({
    triggerElement: "#treemap-text2",
    triggerHook: 0.4,
})
    .setClassToggle("#treemap-img2", 'fade-in')
    // .addIndicators({ name: "tree2" })
    .addTo(controller1);


var scene25 = new ScrollMagic.Scene({
    triggerElement: "#treemap-text3",
    triggerHook: 0.4,
})
    .setClassToggle("#treemap-img3", 'fade-in')
    // .addIndicators({ name: "tree3" })
    .addTo(controller1);



// 人物介绍
document.addEventListener('DOMContentLoaded', function () {
    const avatars = document.querySelectorAll('.avatar img');
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: [0]
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // console.log(`观察到元素：${entry.target.className}，是否可见：${entry.isIntersecting}`);

            if (entry.target.classList.contains('people-Bing')) {
                avatars.forEach(img => {
                    if (img.parentElement.getAttribute('data-avatar') === 'Bing') {
                        if (entry.isIntersecting) {
                            // console.log('显示饼饼的头像');
                            img.classList.add('visible');
                            // console.log(img.classList);
                        } else {
                            // console.log('隐藏饼饼的头像');
                            img.classList.remove('visible');
                        }
                    }
                });
            } else if (entry.target.classList.contains('people-Zhu')) {
                avatars.forEach(img => {
                    if (img.parentElement.getAttribute('data-avatar') === 'Zhu') {
                        if (entry.isIntersecting) {
                            // console.log('显示朱景平的头像');
                            img.classList.add('visible');
                            // console.log(img.classList);
                        } else {
                            // console.log('隐藏朱景平的头像');
                            img.classList.remove('visible');
                        }
                    }
                });
            } else if (entry.target.classList.contains('people-Li')) {
                avatars.forEach(img => {
                    if (img.parentElement.getAttribute('data-avatar') === 'Li') {
                        if (entry.isIntersecting) {
                            // console.log('显示李广的头像');
                            img.classList.add('visible');
                            // console.log(img.classList);
                        } else {
                            // console.log('隐藏李广的头像');
                            img.classList.remove('visible');
                        }
                    }
                });
            } else if (entry.target.classList.contains('people-Qian')) {
                avatars.forEach(img => {
                    if (img.parentElement.getAttribute('data-avatar') === 'Qian') {
                        if (entry.isIntersecting) {
                            // console.log('显示钱小骜的头像');
                            img.classList.add('visible');
                            // console.log(img.classList);
                        } else {
                            // console.log('隐藏钱小骜的头像');
                            img.classList.remove('visible');
                        }
                    }
                });
            } else if (entry.target.classList.contains('people-Liu')) {
                avatars.forEach(img => {
                    if (img.parentElement.getAttribute('data-avatar') === 'Liu') {
                        if (entry.isIntersecting) {
                            // console.log('显示刘进的头像');
                            img.classList.add('visible');
                            // console.log(img.classList);
                        } else {
                            // console.log('隐藏刘进的头像');
                            img.classList.remove('visible');
                        }
                    }
                });
            } else if (entry.target.classList.contains('people-Gao')) {
                avatars.forEach(img => {
                    if (img.parentElement.getAttribute('data-avatar') === 'Gao') {
                        if (entry.isIntersecting) {
                            // console.log('显示高雨的头像');
                            img.classList.add('visible');
                            // console.log(img.classList);
                        } else {
                            // console.log('隐藏高雨的头像');
                            img.classList.remove('visible');
                        }
                    }
                });
            }
        });
    }, observerOptions);

    document.querySelectorAll('.people-Bing, .people-Zhu, .people-Li, .people-Qian, .people-Liu, .people-Gao').forEach(span => {
        // console.log(`开始观察元素：${span.className}`);
        observer.observe(span);
    });
});

//人物介绍 缩进

document.addEventListener('DOMContentLoaded', function () {
    const avatarContainer = document.querySelector('.avatar-container');
    const coverWhole = document.getElementById('cover-whole');
    const triggers = document.querySelectorAll('.avatar-invisible-trigger');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.3
    };

    let coverWholeVisible = false;
    let triggerVisible = false;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.target.classList.contains('avatar-invisible-trigger')) {
                if (entry.isIntersecting) {
                    triggerVisible = true;
                } else {
                    triggerVisible = false;
                }
            }
            updateVisibility();
        });
    }, observerOptions);

    function checkVisibility() {
        const coverWholeRect = coverWhole.getBoundingClientRect();
        coverWholeVisible = (coverWholeRect.top <= 0 && coverWholeRect.bottom >= 0);
        updateVisibility();
    }

    function updateVisibility() {
        if (coverWholeVisible || triggerVisible) {
            avatarContainer.classList.add('avatar-invisible');
        } else {
            avatarContainer.classList.remove('avatar-invisible');
        }
    }

    window.addEventListener('scroll', () => {
        checkVisibility();
    });

    triggers.forEach(trigger => {
        observer.observe(trigger);
    });

    // Initial check in case elements are already in view
    checkVisibility();
});