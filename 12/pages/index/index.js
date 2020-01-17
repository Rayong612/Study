Page({
  canvasIdErrorCallback: function (e) {
    console.error(e.detail.errMsg)
  },
  onReady: function (e) {
    this.draw();
  },
  data:{
    x:0,
    y:0,
    p:true//p用来判断是否执行小球的运行
  },
  canvasClick:function(){
    setInterval(this.draw,10)
  },
// 画布
  draw:function(){
   if(this.data.p == true){
     this.data.x++
     this.data.y++
   }
    // 使用 wx.createContext 获取绘图上下文 context./    context.moveTo(125, 80)
    var context = wx.createCanvasContext('firstCanvas')

    // context.setStrokeStyle("#00ff00")
    // context.setLineWidth(5)
    // context.rect(0, 0, 200, 200)
    // context.stroke()
    context.setStrokeStyle("#ff0000")
    context.setLineWidth(2)
    // context.moveTo(160, 100)
    context.arc(this.data.x, this.data.y, 20, 0, 2 * Math.PI, true)

    context.setLineWidth(2)
    context.moveTo(160, 100)
    context.arc(100, 100, 60, 0, 2 * Math.PI, true)
    context.moveTo(140, 100)
    context.arc(100, 100, 40, 0, Math.PI, false)
    context.moveTo(85, 80)
    context.arc(80, 80, 5, 0, 2 * Math.PI, true)
    context.moveTo(125, 80)
    context.arc(120, 80, 5, 0, 2 * Math.PI, true)
    context.stroke()
    // context.draw()
    wx.drawCanvas({
      canvasId:'firstCanvas',
      actions:context.getActions()
    })
  },
  btnClick:function(){
    this.setData({
      p: !this.data.p,
        x:0,
        y:0
    })
    console.log("x:"+this.data.x)
    console.log("y:"+this.data.y)
  },
  btnClick2:function(){
    
      this.setData({
        p: !this.data.p
      })
    
  
  }

})
