<?php

use App\Models\Connection;
use App\Models\Generation;
use App\Models\Notice;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'generations' => Generation::all(),
        'members' => Generation::isHomePageGeneration()->first()->members,
        'news' => Notice::published()->latest()->take(4)->get(),
    ]);
});

Route::get('/generations/{generation:slug}', function (Generation $generation) {
    return Inertia::render('Generation', [
        'generations' => Generation::all(),
        'generation' => $generation->load('members.socialNetworks'),
    ]);
})->name('generation');

Route::get('/connections', function () {
    return Inertia::render('Connections', [
        'generations' => Generation::all(),
        'connections' => Connection::all(),
    ]);
})->name('conections');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

require __DIR__ . '/auth.php';
