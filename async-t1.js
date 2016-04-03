setTimeout(function() {
    console.log("AAAA");
}, 2000);
console.log("Hello-0");

setTimeout(function() {
    console.log("BBBB");
}, 1000);
console.log("Hello-1");

sleep(10000);

console.log("Hello-2");

function sleep(delay) {
        var start = new Date().getTime();
        while (new Date().getTime() < start + delay);
}

