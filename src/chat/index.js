export default {
/*    $socket.on('receive',(data)=>{
        console.log(data)}),*/
    sockets: {
        connect: function () {
            console.log('连接成功')
        },
        disconnect: function () {
            console.log('断开连接')
        },
        reconnect: function () {
            console.log('重新连接')
        },
    },
}



