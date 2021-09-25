<?php

namespace Database\Seeders;

use App\Models\Character;
use Illuminate\Database\Seeder;

class CharacterSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(): void
    {
        $characters = [
            [
                'name' => null,
                'image_photo_path' => '01.png',
                'type' => Character::TYPES['VIRUS'],
                'description' => null,
                'message' => null,
            ],
            [
                'name' => null,
                'image_photo_path' => '02.png',
                'type' => Character::TYPES['VIRUS'],
                'description' => null,
                'message' => null,
            ],
            [
                'name' => null,
                'image_photo_path' => '03.png',
                'type' => Character::TYPES['VIRUS'],
                'description' => null,
                'message' => null,
            ],
            [
                'name' => 'カミンスキー',
                'image_photo_path' => '04.png',
                'type' => Character::TYPES['RACCINE'],
                'description' => '睡眠導入能力に優れたラクチン。摂取すると短い時間で効果的な睡眠が可能となる。でも時間がある時は熟睡するのも忘れずにね。',
                'message' => 'カミンスキーのチカラで10分間の仮眠が可能となった。いい夢は見れそうかい？',
            ],
            [
                'name' => 'ショゲルナ',
                'image_photo_path' => '05.png',
                'type' => Character::TYPES['RACCINE'],
                'description' => 'ショゲルナ社が作り出した向精神ラクチン。摂取すると自分に少しだけ優しくなれるそうだが…',
                'message' => 'ショゲルナのチカラで自分を責めるのがバカバカしくなってきた！自分を目一杯褒めよう！生きてるだけでえらい！',
            ],
            [
                'name' => 'アスカラゼン力',
                'image_photo_path' => '06.png',
                'type' => Character::TYPES['RACCINE'],
                'description' => '「あすからぜんりょく」と読む。摂取すると次に備えて力を蓄えることができる。',
                'message' => 'アスカラゼン力のチカラで明日へのキボウが湧いてきた…気がする…！今日は明日に備えて早めに作業を終えよう。',
            ],
            [
                'name' => 'エセネス',
                'image_photo_path' => '07.png',
                'type' => Character::TYPES['RACCINE'],
                'description' => 'ヒトの好奇心に作用するラクチン。摂取すると無性に他者の情報を知りたくなる…',
                'message' => 'エセネスのチカラで無性に情報に触れたくなってきた…今から10分だけSNSに興じることを許そう。ただ…やりすぎには注意だ。',
            ],
            [
                'name' => 'サポン',
                'image_photo_path' => '08.png',
                'type' => Character::TYPES['RACCINE'],
                'description' => '自然由来の成分で作られたラクチン。摂取すると外の空気が２倍美味く感じられるという。',
                'message' => 'サポンのチカラであなたは今外の空気が2倍美味く感じられるはずだ。今から30分、散歩でもしてきたらどうかな？',
            ],
            [
                'name' => 'ハヤアガリ',
                'image_photo_path' => '09.png',
                'type' => Character::TYPES['RACCINE'],
                'description' => 'ちょこまかと体内を動き回るラクチン。摂取するといつもより早く動くことができるらしい…ホントかな。',
                'message' => 'ハヤアガリのチカラであなたは倍の速さで行動できる…みたい。やることを予定より数分早く終えてもいいが…なにもせずに終わっちゃだめだぞ。',
            ],
        ];
        $this->createCharacters($characters);
    }

    /**
     * @param array $characters
     */
    public function createCharacters(array $characters): void
    {
        foreach ($characters as $character) {
            Character::insert($character);
        }
    }
}
