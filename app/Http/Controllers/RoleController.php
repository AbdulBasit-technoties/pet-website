<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use Inertia\Inertia;

class RoleController extends Controller
{
    public function update(Request $request, $id)
    {
        if (!auth()->user()->can('roles.update')) {
            abort(401);
        }
        $permissions = $request->all();
        $role = Role::find($id)->syncPermissions($permissions);
        return session()->flash('message', 'Permissions updated successfully');
    }


    public function show($id)
    {
        if (!auth()->user()->can('roles.show')) {
            abort(401);
        }
        $role = Role::findOrFail($id);
        $permissions = $role->permissions->pluck('name')->toArray();
        $permissionsList = Permission::pluck('name')->toArray();
        $models = config('models.models');
        return Inertia::render('Roles/Show', compact('role', 'permissions', 'permissionsList', 'models'));
    }
    public function index(Request $request)
    {
        if (!auth()->user()->can('roles.index')) {
            abort(401);
        }
        $role = Role::paginate(30);
        $editData = $request->id ? Role::find($request->id) : null;
        $isEditMode = (bool)$request->id;
        return Inertia::render('Roles/Index', compact('role', 'editData', 'isEditMode'));
    }

    public function create(Request $request)
    {
        if (!auth()->user()->can('roles.create')) {
            abort(401);
        }

        return Inertia::render('Roles/Create');
    }


    public function store(Request $request)
    {
        if (!auth()->user()->can('roles.store')) {
            abort(401);
        }
        $request->validate([
            'name' => 'required|string|max:255',
        ]);
        if (Role::where('name', $request->name)->exists()) {
            session()->flash('message', 'Role already exists');
            return redirect()->back();
        }
        Role::create([
            'name' => $request->name,
        ]);
        return redirect()->route('roles.index')->with([
            'message' => 'Role created successfully!'
        ]);
    }

    public function Edit($id)
    {
        $role = Role::findOrFail($id);
        return Inertia::render('Roles/Edit', compact('role'));
    }
    public function destroy($id)
    {
        if (!auth()->user()->can('roles.destroy')) {
            abort(401);
        }
        $role = Role::findOrFail($id);
        $role->delete();
        return redirect()->route('roles.index')->with([
            'message' => 'Role deleted successfully!'
        ]);
    }
}
