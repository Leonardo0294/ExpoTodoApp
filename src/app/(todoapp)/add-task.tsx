import { baseStyles } from "@/components/base-styles";
import InputController from "@/components/input-controller";
import TaskForm from "@/components/tasks/task-form";
import { useTasks } from "@/hooks/use-tasks";
import { Task } from "@/interfaces/task";
import { View } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

export default function AddTodo() {
  const { addTask } = useTasks();
  const handleSubmit = (fields: Task) => {
    addTask(fields);
  };
  return (
    <LinearGradient
      colors={['#4e9cff', '#77d4ff']}
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <View style={baseStyles.container}>
        <TaskForm
          titleText="NUEVA TAREA" 
          onSubmit={handleSubmit} 
          getValues={() => undefined}
          buttonText="Agregar tarea"
          formStyle={{
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            borderRadius: 10,
            padding: 20,
            width: '80%',
          }}
          inputStyle={{
            backgroundColor: 'rgba(255, 255, 255, 0.6)',
            borderRadius: 5,
            marginBottom: 10,
            paddingHorizontal: 15,
            paddingVertical: 10,
            fontSize: 16,
          }}
          buttonStyle={{
            backgroundColor: '#0072ff',
            borderRadius: 25,
            paddingVertical: 15,
            alignItems: 'center',
          }}
          buttonTextStyle={{
            color: '#fff',
            fontSize: 18,
            fontWeight: 'bold',
          }}
        /> 
      </View>
    </LinearGradient>
  );
}
