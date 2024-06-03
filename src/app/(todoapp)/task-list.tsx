import { baseStyles } from "@/components/base-styles";
import TaskReminder from "@/components/tasks/task.reminder";
import { useTasks } from "@/hooks/use-tasks";
import { Task } from "@/interfaces/task";
import { SectionList, View } from "react-native";
import { List, Text } from "react-native-paper";
import { ScaledSheet } from "react-native-size-matters";

export default function TodoList() {
  const { tasks } = useTasks();
  const forToday = tasks.filter(
    (task) => task.date.getTime() === new Date().getTime()
  );
  const forTomorrow = tasks.filter(
    (task) => task.date.getTime() === new Date().getTime() + 1
  );
  const sections = [
    {
      title: "Tareas para hoy",
      data: forToday,
    },
    {
      title: "Tareas para mañana",
      data: forTomorrow,
    },
    {
      title: "Tareas para el futuro",
      data: tasks.filter(
        (t) => forToday.indexOf(t) === -1 && forTomorrow.indexOf(t) === -1
      ),
    },
  ];
  return (
      <View style={styles.container}>
        <List.Section>
          <SectionList
            sections={sections}
            contentContainerStyle={styles.content}
            renderSectionHeader={({ section }) => (
              <>
                <List.Subheader
                  style={[
                    styles.subheader,
                    {
                      fontWeight: 'bold',
                    },
                  ]}
                >
                  {section.title}
                </List.Subheader>

                {section.data.length == 0 && (
                  <TodoListEmpty title={`No hay tareas para ${section.title}`} />
                )}
              </>
            )}
            renderItem={({ item }) => <TodoListItem task={item} />}
          ></SectionList>
        </List.Section>
      </View>
  );
}

function TodoListItem(props: { task: Task }) {
  const { task } = props;
  return (
    <View>
      <TaskReminder task={task} size="small" />
    </View>
  );
}

function TodoListEmpty(props: { title: string }) {
  return (
    <Text
      style={[
        baseStyles.baseText,
        {
          padding: 10,
          textAlign: "center",
          color: "gray",
        },
      ]}
    >
      {props.title}
    </Text>
  );
}

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 5,
    paddingVertical: 0,
  },
  content: {
    padding: "10@s",
    paddingBottom: "90@s",
  },
  subheader: {
    ...baseStyles.heading,
    ...baseStyles.subheading,
    marginTop: 0,
    marginBottom: 10,
  },
});
