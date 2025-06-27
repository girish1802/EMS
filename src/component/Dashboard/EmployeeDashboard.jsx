import React from 'react'
import Header from '../other/Header'
import TasklistNumber from '../other/TasklistNumber'
import TaskList from '../TaskList/TaskList'

export default function EmployeeDashboard() {
  return (
   <>
     <Header />
     <TasklistNumber />
     <TaskList />
   </>
  )
}
