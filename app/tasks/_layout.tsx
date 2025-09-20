import { Stack } from 'expo-router'
import React from 'react'

const TasksLayout = () => {
  return (
    <Stack>
        <Stack.Screen name="[id]/index" options={{ title: "Task Detail" }} />
        <Stack.Screen name="[id]/subtask/[subtaskId]/index" options={{ title: "Subtask Detail" }} />
    </Stack>
  )
}

export default TasksLayout