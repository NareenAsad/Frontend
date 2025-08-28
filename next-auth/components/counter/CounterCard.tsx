"use client";

import { useCounterStore } from "@/lib/store/counter-store";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function CounterCard() {
  const count = useCounterStore((state) => state.count);
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);
  const reset = useCounterStore((state) => state.reset);

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <Card className="bg-card border border-border rounded-xl shadow-md">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold">Current Count</CardTitle>
          <CardDescription>Simple counter with increment, decrement, and reset functionality</CardDescription>
        </CardHeader>

        <CardContent>
          <div className="text-center mb-8">
            <div className="text-6xl font-bold text-primary mb-4">{count}</div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Button onClick={decrement} variant="outline" size="lg">
              -1 Decrement
            </Button>

            <Button onClick={increment} size="lg">
              +1 Increment
            </Button>

            <Button onClick={reset} variant="secondary" size="lg">
              Reset
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
