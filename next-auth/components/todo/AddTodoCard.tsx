'use client';

import { useState } from 'react';
import { useCounterStore } from '@/lib/store/counter-store';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Plus } from 'lucide-react';

export function AddTodoCard() {
  const { addTodo } = useCounterStore();
  const [newTodo, setNewTodo] = useState({ title: '', description: '' });

  const handleAddTodo = () => {
    if (newTodo.title.trim()) {
      addTodo({
        id: Date.now(),
        title: newTodo.title,
        description: newTodo.description,
      });
      setNewTodo({ title: '', description: '' });
    }
  };

  return (
    <Card className="h-fit">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <span>Add New Todo</span>
        </CardTitle>
        <CardDescription>
          Create a new todo item with title and description
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="title">Title</Label>
          <Input
            id="title"
            placeholder="Enter todo title..."
            value={newTodo.title}
            onChange={(e) => setNewTodo(prev => ({ ...prev, title: e.target.value }))}
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            placeholder="Enter todo description..."
            value={newTodo.description}
            onChange={(e) => setNewTodo(prev => ({ ...prev, description: e.target.value }))}
            rows={3}
          />
        </div>
        
        <Button
          onClick={handleAddTodo}
          className="w-full"
          disabled={!newTodo.title.trim()}
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Todo
        </Button>
      </CardContent>
    </Card>
  );
}