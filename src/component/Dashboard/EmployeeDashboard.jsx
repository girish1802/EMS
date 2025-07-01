import React from 'react'
import Header from '../other/Header'
import TasklistNumber from '../other/TasklistNumber'
import TaskList from '../TaskList/TaskList'
import AllTask from '../other/AllTask'

export default function EmployeeDashboard() {
  return (
   <>
     <Header />
     <TasklistNumber />
     <TaskList />
     <AllTask />
   </>
  )
}
