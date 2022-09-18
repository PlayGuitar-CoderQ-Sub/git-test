import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

const Son = () => {
  return (
    <div>新增一个组件1</div>
  )
}

const Son2 = () => {
  return (
    <div>新增第二个组件</div>
  )
}

const Son3 = () => {
  return (
    <div>新增第三个组件</div>
  )
}

function App() {

  return (
    <div className="App">
      上传需求
      <span>再次修改123</span>
      <span>123123123123</span>
      <span>02 演示补充</span>
      <span>测试初次使用standard-version</span>
      <span>测试style</span>
      <span>测试pref</span>
      <span>测试refactor</span>
      <span>测试revert</span>
      <span>测试test</span>
      <span>测试docs</span>
      <span>测试chore</span>
      <span>测试release</span>
      <span>测试workflow</span>
      <span>测试ci</span>
      <span>测试mod</span>
      <span>测试wip</span>
      <span>测试types</span>
      <span>测试update</span>
      <span>测试init</span>
      <span>测试init</span>
      <span>测试错误提交</span>
      <span>测试错误提交1</span>
      <span>测试提交1111</span>
      <span>测试提交1112</span>
      <span>测试提交1113</span>
      <Son />
      <Son2 />
      <Son3 />
    </div>
  )
}

export default App
