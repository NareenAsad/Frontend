'use client';

import { Navigation } from '@/components/layout/Navigation';
import { ProtectedRoute } from '@/components/layout/ProtectedRoute';
import { Heading } from '@/components/typography/Heading';
import { Text } from '@/components/typography/Text';
import { CounterCard } from '@/components/counter/CounterCard';
import { AddTodoCard } from '@/components/todo/AddTodoCard';
import { TodoList } from '@/components/todo/TodoList';

export default function CounterPage() {
  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-background">
        <Navigation />
        
        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="space-y-8">
            {/* Header */}
            <div className="text-center space-y-2">
              <Heading level={1}>Counter & Todo Manager</Heading>
            </div>

            {/* Counter and Add Todo Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <CounterCard />
              <AddTodoCard />
            </div>

            {/* Todo List */}
            <TodoList />
          </div>
        </main>
      </div>
    </ProtectedRoute>
  );
}