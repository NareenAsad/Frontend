'use client';

import { useCounterStore } from '@/lib/store/counter-store';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Text } from '@/components/typography/Text';
import { Plus, Trash2 } from 'lucide-react';

export function TodoList() {
  const { todos, removeTodo } = useCounterStore();

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Todo List ({todos.length})</span>
          <div className="text-sm text-muted-foreground">
            Total todos: {todos.length}
          </div>
        </CardTitle>
        <CardDescription>
          Manage your todo items - view and delete todos
        </CardDescription>
      </CardHeader>
      <CardContent>
        {todos.length === 0 ? (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-muted/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Plus className="w-8 h-8 text-muted-foreground" />
            </div>
            <Text variant="secondary">No todos yet</Text>
            <Text variant="muted" size="sm">
              Add your first todo to get started
            </Text>
          </div>
        ) : (
          <div className="space-y-4">
            {todos.map((todo) => (
              <div
                key={todo.id}
                className="p-4 border rounded-lg hover:bg-muted/20 transition-colors"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-1">{todo.title}</h3>
                    {todo.description && (
                      <p className="text-muted-foreground text-sm">{todo.description}</p>
                    )}
                  </div>
                  <div className="flex space-x-2 ml-4">
                    <Button
                      onClick={() => removeTodo(todo.id)}
                      variant="ghost"
                      size="sm"
                      className="text-destructive hover:text-destructive"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}