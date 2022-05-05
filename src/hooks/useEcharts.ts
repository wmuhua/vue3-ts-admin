import * as echarts  from 'echarts'
export default function useEcharts(el:HTMLElement){
    //初始化echarts
    const echartsInstance = echarts.init(el);
    
    //设置options
    const setOptions = (options:any) =>{
        echartsInstance.setOption(options)
    }

    //自适应监听
    const resize = () =>{
        echartsInstance.resize()
    }

    return{
        setOptions,
        resize
    }
}