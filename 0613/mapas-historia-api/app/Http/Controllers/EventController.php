<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Event;

class EventController extends Controller
{
    public function index(Request $request)
    {
        $query = Event::query();

        if ($request->has('location')) {
            $query->where('location', $request->input('location'));
        }

        if ($request->has('date')) {
            $query->whereDate('event_date', $request->input('date'));
        }

        return response()->json($query->get());
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'location' => 'required|string|max:255',
            'event_date' => 'required|date',
        ]);

        $event = Event::create($validated);

        return response()->json($event, 201);
    }

    public function show(string $id)
    {
        return response()->json(Event::findOrFail($id));
    }

    public function update(Request $request, string $id)
    {
        $event = Event::findOrFail($id);

        $validated = $request->validate([
            'title' => 'sometimes|string|max:255',
            'description' => 'sometimes|string',
            'location' => 'sometimes|string|max:255',
            'event_date' => 'sometimes|date',
        ]);

        $event->update($validated);

        return response()->json($event);
    }

    public function destroy(string $id)
    {
        Event::findOrFail($id)->delete();

        return response()->json(['message' => 'Evento eliminado']);
    }
}
