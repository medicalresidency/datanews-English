document.addEventListener('DOMContentLoaded', function() {
    const nightmare = document.getElementById('nightmare');
    const video = document.getElementById('background-video');
    const vh = window.innerHeight;
    const nightmareScrollLength = 3000; // 这里的单位应该是数字而不是px
    let initialScrollTop = null;

    // 初始化视频
    video.pause(); // 暂停视频以准备手动控制播放
    video.currentTime = 0;

    // 平滑函数
    function UniformFun() {
        if (stopFlag) {
            clearInterval(timer);
            return;
        }
        timer = setInterval(() => {
            if (stopFlag) {
                clearInterval(timer);
            }
            if (currProgress === aim) {
                return;
            }
            currProgress < aim ? currProgress += frameSpeedSecond : currProgress -= frameSpeedSecond;
            video.currentTime = currProgress; // 设置视频进度
        }, frameSpeedMs);
    }

    // 模拟滚动函数
    function loopCallMock() {
        let timeArr = [5, 7, 10, 2, 9, 12];
        let timer2 = (arr) => {
            if (!arr.length) {
                return;
            }
            stopFlag = false;
            let currStep = arr.shift();
            aim = currStep;
            setTimeout(() => {
                timer2(arr);
            }, currStep * 1000);
        }
        timer2(timeArr);
    }

    window.addEventListener('scroll', function() {
        const videoRect = video.getBoundingClientRect();
        const videoTop = videoRect.top;


        if (videoTop <= 0.5 * vh) {
            nightmare.style.opacity = '1';
            if (initialScrollTop === null) {
                initialScrollTop = window.scrollY; // 记录nightmare出现时的scrollTop
            }
        } else {
            nightmare.style.opacity = '0';
        }


        // 控制视频播放
        if (nightmare.style.opacity === '1' && initialScrollTop !== null) {
            const scrollTop = window.scrollY - initialScrollTop;
            const scrollFraction = scrollTop / nightmareScrollLength;
            const videoDuration = video.duration;
            video.currentTime = Math.min(Math.max(scrollFraction * videoDuration, 0), videoDuration); // 限制在0到视频时长之间
        }
    });

    // 确保视频元数据加载完成后才能获取其 duration
    video.addEventListener('loadedmetadata', () => {
        window.dispatchEvent(new Event('scroll'));
    });

    // 测试模拟滚动函数
    loopCallMock();
});