/*
 * @Author: changluo
 * @Description: 
 */
function getFps() {
    const requestAnimationFrame = window.requestAnimationFrame || window.setTimeout(callback, 1000 / 60)
    let fps = 0;
    let previous = Date.now();
    let offset = 0;
    const step = () => {
        const now = Date.now();
        offset = now - previous;
        fps++
        if (offset >= 1000) {
            console.log('屏幕刷新率', fps);
            fps = 0
            previous = now
        }
        requestAnimationFrame(step)
    }
}