<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Carbon\Carbon;
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
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard', [       
        // 'Todos' => \App\Models\Todo::with('user:id,name')->get()->take(10),
        $today=Carbon::today(),
        'Todos' => Auth::user()->todos()->where('period_day','>',$today)->orderBy('period_day','desc')->get()->take(15),
    ]);
})->middleware(['auth', 'verified'])->name('dashboard');

require __DIR__ . '/auth.php';
