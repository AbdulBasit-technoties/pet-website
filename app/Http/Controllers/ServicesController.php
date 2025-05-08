<?php

namespace App\Http\Controllers;

use App\Models\Services;
use App\Http\Requests\StoreServicesRequest;
use App\Http\Requests\UpdateServicesRequest;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ServicesController extends Controller
{
    public function FrontIndex()
    {
        $services = Services::latest()->take(5)->get();
        return Inertia::render('Frontend/Services', [
            'services' => $services,
        ]);
    }


    public function Index(Request $request)
    {
        if (!auth()->user()->can('services.index')) {
            abort(401);
        }
        $services = Services::paginate(30);
        $editData = $request->id ? Services::find($request->id) : null;
        $isEditMode = (bool)$request->id;
        return Inertia::render('Services/Index', compact('services', 'editData', 'isEditMode'));
    }

    public function Store(StoreServicesRequest $request)
    {
        if (!auth()->user()->can('services.index')) {
            abort(401);
        }
        $data = $request->all();
        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('Services', 'public');
            $data['image'] = $path;
        }
        Services::create($data);
        return redirect()->route('services.index')->with([
            'message' => 'Service created successfully!'
        ]);
    }
    public function Update(UpdateServicesRequest $request, Services $service)
    {
        if (!auth()->user()->can('services.update')) {
            abort(401);
        }
        $service->update($request->all());
        return redirect()->route('services.index')->with([
            'message' => 'Service updated successfully!'
        ]);
    }
    public function ServiceImage(Request $request)
    {
        $service = Services::find($request->id);
        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('Services', 'public');
            $service->update(['image' => $path]);
        }

        return redirect()->back()->with('success', 'Image updated successfully!');
    }
    public function destroy($id)
    {
        if (!auth()->user()->can('services.destroy')) {
            abort(401);
        }
        $service = Services::findOrFail($id);
        $service->delete();
        return redirect()->route('services.index')->with([
            'message' => 'Service deleted successfully!'
        ]);
    }
}
