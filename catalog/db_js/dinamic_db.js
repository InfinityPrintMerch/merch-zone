let currentPage = 1;
const itemsPerPage = 20; // 20 productos por página

// Función para cargar productos de una colección
const jsonPaths = {
    streetwear: {
        'streetwear_vol_1': 'json/streetwear/streetwear_vol_1.json',
        'streetwear_vol_2': 'json/streetwear/streetwear_vol_2.json',
        'streetwear_vol_3': 'json/streetwear/streetwear_vol_3.json',
        'streetwear_vol_4': 'json/streetwear/streetwear_vol_4.json',
        'streetwear_vol_5': 'json/streetwear/streetwear_vol_5.json',
        'streetwear_vol_6': 'json/streetwear/streetwear_vol_6.json',
        'streetwear_vol_7': 'json/streetwear/streetwear_vol_7.json',
        'streetwear_vol_8': 'json/streetwear/streetwear_vol_8.json',
        'streetwear_vol_9': 'json/streetwear/streetwear_vol_9.json',
        'streetwear_vol_10': 'json/streetwear/streetwear_vol_10.json',
        'streetwear_vol_11': 'json/streetwear/streetwear_vol_11.json',
        'streetwear_vol_12': 'json/streetwear/streetwear_vol_12.json',
        'streetwear_vol_13': 'json/streetwear/streetwear_vol_13.json',
        'streetwear_vol_14': 'json/streetwear/streetwear_vol_14.json',
        'streetwear_vol_15': 'json/streetwear/streetwear_vol_15.json',
        'streetwear_vol_16': 'json/streetwear/streetwear_vol_16.json',
        'streetwear_vol_17': 'json/streetwear/streetwear_vol_17.json',
        'streetwear_vol_18': 'json/streetwear/streetwear_vol_18.json',
        'streetwear_vol_19': 'json/streetwear/streetwear_vol_19.json',
        'streetwear_vol_20': 'json/streetwear/streetwear_vol_20.json',
        'streetwear_vol_21': 'json/streetwear/streetwear_vol_21.json',
        'streetwear_vol_22': 'json/streetwear/streetwear_vol_22.json',
        'streetwear_vol_23': 'json/streetwear/streetwear_vol_23.json',
        'streetwear_vol_24': 'json/streetwear/streetwear_vol_24.json',
        'streetwear_vol_25': 'json/streetwear/streetwear_vol_25.json',
        'streetwear_vol_26': 'json/streetwear/streetwear_vol_26.json',
        'streetwear_vol_27': 'json/streetwear/streetwear_vol_27.json',
        'streetwear_vol_28': 'json/streetwear/streetwear_vol_28.json',
        'streetwear_vol_29': 'json/streetwear/streetwear_vol_29.json',
        'streetwear_vol_30': 'json/streetwear/streetwear_vol_30.json',
        'streetwear_vol_31': 'json/streetwear/streetwear_vol_31.json',
        'streetwear_vol_32': 'json/streetwear/streetwear_vol_32.json',
        'streetwear_vol_33': 'json/streetwear/streetwear_vol_33.json',
        'streetwear_vol_34': 'json/streetwear/streetwear_vol_34.json',
        'streetwear_vol_35': 'json/streetwear/streetwear_vol_35.json',
        'streetwear_vol_36': 'json/streetwear/streetwear_vol_36.json',
        'streetwear_vol_37': 'json/streetwear/streetwear_vol_37.json',
        'streetwear_vol_38': 'json/streetwear/streetwear_vol_38.json',
        'streetwear_vol_39': 'json/streetwear/streetwear_vol_39.json'
    },
    anime: {
      'akira_vol_1': 'json/anime/akira_vol_1.json',
      'angel_beats_vol_1': 'json/anime/angel_beats_vol_1.json',
      'anime_vol_1': 'json/anime/anime_vol_1.json',
      'girls_vol_1': 'json/anime/girls_vol_1.json',
      'anime_vol_2': 'json/anime/anime_vol_2.json',
      'anime_vol_3': 'json/anime/anime_vol_3.json',
      'anime_vol_4': 'json/anime/anime_vol_4.json',
      'anime_vol_5': 'json/anime/anime_vol_5.json',
      'anime_vol_6': 'json/anime/anime_vol_6.json',
      'anime_vol_7': 'json/anime/anime_vol_7.json',
      'anime_vol_8': 'json/anime/anime_vol_8.json',
      'anime_vol_9': 'json/anime/anime_vol_9.json',
      'anime_vol_10': 'json/anime/anime_vol_10.json',
      'anime_vol_11': 'json/anime/anime_vol_11.json',
      'anime_vol_12': 'json/anime/anime_vol_12.json',
      'anime_vol_13': 'json/anime/anime_vol_13.json',
      'anime_vol_14': 'json/anime/anime_vol_14.json',
      'anime_vol_15': 'json/anime/anime_vol_15.json',
      'anime_vol_16': 'json/anime/anime_vol_16.json',
      'anime_vol_17': 'json/anime/anime_vol_17.json',
      'anime_vol_18': 'json/anime/anime_vol_18.json',
      'exclusivos_vol_1': 'json/anime/exclusivos_vol_1.json',
      'exclusivos_vol_2': 'json/anime/exclusivos_vol_2.json',
      'exclusivos_vol_3': 'json/anime/exclusivos_vol_3.json',
      'exclusivos_vol_4': 'json/anime/exclusivos_vol_4.json',
      'exclusivos_vol_5': 'json/anime/exclusivos_vol_5.json',
      'exclusivos_vol_6': 'json/anime/exclusivos_vol_6.json',
      'exclusivos_vol_7': 'json/anime/exclusivos_vol_7.json',
      'exclusivos_vol_8': 'json/anime/exclusivos_vol_8.json',
      'exclusivos_vol_9': 'json/anime/exclusivos_vol_9.json',
      'exclusivos_vol_10': 'json/anime/exclusivos_vol_10.json',
      'exclusivos_vol_11': 'json/anime/exclusivos_vol_11.json',
      'exclusivos_vol_12': 'json/anime/exclusivos_vol_12.json',
      'exclusivos_vol_13': 'json/anime/exclusivos_vol_13.json',
      'exclusivos_vol_14': 'json/anime/exclusivos_vol_14.json',
      'exclusivos_vol_15': 'json/anime/exclusivos_vol_15.json',
      'exclusivos_vol_16': 'json/anime/exclusivos_vol_16.json',
      'exclusivos_vol_17': 'json/anime/exclusivos_vol_17.json',
      'exclusivos_vol_18': 'json/anime/exclusivos_vol_18.json',
      'exclusivos_vol_19': 'json/anime/exclusivos_vol_19.json',
      'exclusivos_vol_20': 'json/anime/exclusivos_vol_20.json',
      'exclusivos_vol_21': 'json/anime/exclusivos_vol_21.json',
      'exclusivos_vol_22': 'json/anime/exclusivos_vol_22.json',
      'exclusivos_vol_23': 'json/anime/exclusivos_vol_23.json',
      'exclusivos_vol_24': 'json/anime/exclusivos_vol_24.json',
      'exclusivos_vol_25': 'json/anime/exclusivos_vol_25.json',
      'exclusivos_vol_26': 'json/anime/exclusivos_vol_26.json',
      'exclusivos_vol_27': 'json/anime/exclusivos_vol_27.json',
      'exclusivos_vol_28': 'json/anime/exclusivos_vol_28.json',
      'exclusivos_vol_29': 'json/anime/exclusivos_vol_29.json',
      'exclusivos_vol_30': 'json/anime/exclusivos_vol_30.json',
      'exclusivos_vol_31': 'json/anime/exclusivos_vol_31.json',
      'exclusivos_vol_32': 'json/anime/exclusivos_vol_32.json',
      'exclusivos_vol_33': 'json/anime/exclusivos_vol_33.json',
      'exclusivos_vol_34': 'json/anime/exclusivos_vol_34.json',
      'exclusivos_vol_35': 'json/anime/exclusivos_vol_35.json',
      'exclusivos_vol_36': 'json/anime/exclusivos_vol_36.json',
      'exclusivos_vol_37': 'json/anime/exclusivos_vol_37.json',
      'exclusivos_vol_38': 'json/anime/exclusivos_vol_38.json',
      'exclusivos_vol_39': 'json/anime/exclusivos_vol_39.json',
      'exclusivos_vol_40': 'json/anime/exclusivos_vol_40.json',
      'exclusivos_vol_41': 'json/anime/exclusivos_vol_41.json',
      'exclusivos_vol_42': 'json/anime/exclusivos_vol_42.json',
      'exclusivos_vol_43': 'json/anime/exclusivos_vol_43.json',
      'exclusivos_vol_44': 'json/anime/exclusivos_vol_44.json',
      'exclusivos_vol_45': 'json/anime/exclusivos_vol_45.json',
      'exclusivos_vol_46': 'json/anime/exclusivos_vol_46.json',
      'exclusivos_vol_47': 'json/anime/exclusivos_vol_47.json',
      'exclusivos_vol_48': 'json/anime/exclusivos_vol_48.json',
      'exclusivos_vol_49': 'json/anime/exclusivos_vol_49.json',
      'exclusivos_vol_50': 'json/anime/exclusivos_vol_50.json',
      'exclusivos_vol_51': 'json/anime/exclusivos_vol_51.json',
      'exclusivos_vol_52': 'json/anime/exclusivos_vol_52.json',
      'exclusivos_vol_53': 'json/anime/exclusivos_vol_53.json',
      'exclusivos_vol_54': 'json/anime/exclusivos_vol_54.json',
      'exclusivos_vol_55': 'json/anime/exclusivos_vol_55.json',
      'exclusivos_vol_56': 'json/anime/exclusivos_vol_56.json',
      'exclusivos_vol_57': 'json/anime/exclusivos_vol_57.json',
      'exclusivos_vol_58': 'json/anime/exclusivos_vol_58.json',
      'exclusivos_vol_59': 'json/anime/exclusivos_vol_59.json',
      'exclusivos_vol_60': 'json/anime/exclusivos_vol_60.json',
      'exclusivos_vol_61': 'json/anime/exclusivos_vol_61.json',
      'exclusivos_vol_62': 'json/anime/exclusivos_vol_62.json',
      'exclusivos_vol_63': 'json/anime/exclusivos_vol_63.json',
      'exclusivos_vol_64': 'json/anime/exclusivos_vol_64.json',
      'exclusivos_vol_65': 'json/anime/exclusivos_vol_65.json',
      'exclusivos_vol_66': 'json/anime/exclusivos_vol_66.json',
      'exclusivos_vol_67': 'json/anime/exclusivos_vol_67.json',
      'exclusivos_vol_68': 'json/anime/exclusivos_vol_68.json',
      'exclusivos_vol_69': 'json/anime/exclusivos_vol_69.json',
      'exclusivos_vol_70': 'json/anime/exclusivos_vol_70.json',
      'exclusivos_vol_71': 'json/anime/exclusivos_vol_71.json',
      'exclusivos_vol_72': 'json/anime/exclusivos_vol_72.json',
      'exclusivos_vol_73': 'json/anime/exclusivos_vol_73.json',
      'exclusivos_vol_74': 'json/anime/exclusivos_vol_74.json',
      'exclusivos_vol_75': 'json/anime/exclusivos_vol_75.json',
      'attack_on_titan_vol_1': 'json/anime/attack_on_titan_vol_1.json',
      'attack_on_titan_vol_2': 'json/anime/attack_on_titan_vol_2.json',
      'attack_on_titan_vol_3': 'json/anime/attack_on_titan_vol_3.json',
      'attack_on_titan_vol_4': 'json/anime/attack_on_titan_vol_4.json',
      'baki_vol_1': 'json/anime/baki_vol_1.json',
      'baki_vol_2': 'json/anime/baki_vol_2.json',
      'berserk_vol_1': 'json/anime/berserk_vol_1.json',
      'berserk_vol_2': 'json/anime/berserk_vol_2.json',
      'black_clover_vol_1': 'json/anime/black_clover_vol_1.json',
      'black_clover_vol_2': 'json/anime/black_clover_vol_2.json',
      'black_clover_vol_3': 'json/anime/black_clover_vol_3.json',
      'bleach_vol_1': 'json/anime/bleach_vol_1.json',
      'blue_lock_vol_1': 'json/anime/blue_lock_vol_1.json',
      'blue_lock_vol_2': 'json/anime/blue_lock_vol_2.json',
      'bochi_the_rock_vol_1': 'json/anime/bochi_the_rock_vol_1.json',
      'boku_no_hero_vol_1': 'json/anime/boku_no_hero_vol_1.json',
      'boku_no_hero_vol_2': 'json/anime/boku_no_hero_vol_2.json',
      'boku_no_hero_vol_3': 'json/anime/boku_no_hero_vol_3.json',
      'caballeros_del_zodiaco_vol_1': 'json/anime/caballeros_del_zodiaco_vol_1.json',
      'caballeros_del_zodiaco_vol_2': 'json/anime/caballeros_del_zodiaco_vol_2.json',
      'caballeros_del_zodiaco_vol_3': 'json/anime/caballeros_del_zodiaco_vol_3.json',
      'caballeros_del_zodiaco_vol_4': 'json/anime/caballeros_del_zodiaco_vol_4.json',
      'caballeros_del_zodiaco_vol_5': 'json/anime/caballeros_del_zodiaco_vol_5.json',
      'caballeros_del_zodiaco_vol_6': 'json/anime/caballeros_del_zodiaco_vol_6.json',
      'caballeros_del_zodiaco_vol_7': 'json/anime/caballeros_del_zodiaco_vol_7.json',
      'caballeros_del_zodiaco_vol_8': 'json/anime/caballeros_del_zodiaco_vol_8.json',
      'caballeros_del_zodiaco_vol_9': 'json/anime/caballeros_del_zodiaco_vol_9.json',
      'caballeros_del_zodiaco_vol_10': 'json/anime/caballeros_del_zodiaco_vol_10.json',
      'candy_candy_vol_1': 'json/anime/candy_candy_vol_1.json',
      'chainsaw_man_vol_1': 'json/anime/chainsaw_man_vol_1.json',
      'chainsaw_man_vol_2': 'json/anime/chainsaw_man_vol_2.json',
      'chainsaw_man_vol_3': 'json/anime/chainsaw_man_vol_3.json',
      'chainsaw_man_vol_4': 'json/anime/chainsaw_man_vol_4.json',
      'cowboy_bebop_vol_1': 'json/anime/cowboy_bebop_vol_1.json',
      'cyberpunk_edgerunners_vol_1': 'json/anime/cyberpunk_edgerunners_vol_1.json',
      'cyberpunk_edgerunners_vol_2': 'json/anime/cyberpunk_edgerunners_vol_2.json',
      'date_a_live_vol_1': 'json/anime/date_a_live_vol_1.json',
'death_note_vol_1': 'json/anime/death_note_vol_1.json',
'demon_slayer_vol_1': 'json/anime/demon_slayer_vol_1.json',
'demon_slayer_vol_2': 'json/anime/demon_slayer_vol_2.json',
'demon_slayer_vol_3': 'json/anime/demon_slayer_vol_3.json',
'demon_slayer_vol_4': 'json/anime/demon_slayer_vol_4.json',
'demon_slayer_vol_5': 'json/anime/demon_slayer_vol_5.json',
'demon_slayer_vol_6': 'json/anime/demon_slayer_vol_6.json',
'demon_slayer_vol_7': 'json/anime/demon_slayer_vol_7.json',
'demon_slayer_vol_8': 'json/anime/demon_slayer_vol_8.json',
'demon_slayer_vol_9': 'json/anime/demon_slayer_vol_9.json',
'devilman_vol_1': 'json/anime/devilman_vol_1.json',
'dragon_ball_vol_1': 'json/anime/dragon_ball_vol_1.json',
'dragon_ball_vol_2': 'json/anime/dragon_ball_vol_2.json',
'dragon_ball_vol_3': 'json/anime/dragon_ball_vol_3.json',
'dragon_ball_vol_4': 'json/anime/dragon_ball_vol_4.json',
'dragon_ball_vol_5': 'json/anime/dragon_ball_vol_5.json',
'dragon_ball_vol_6': 'json/anime/dragon_ball_vol_6.json',
'dragon_ball_vol_7': 'json/anime/dragon_ball_vol_7.json',
'dragon_ball_vol_8': 'json/anime/dragon_ball_vol_8.json',
'dragon_ball_vol_9': 'json/anime/dragon_ball_vol_9.json',
'dragon_ball_vol_10': 'json/anime/dragon_ball_vol_10.json',
'dragon_ball_vol_11': 'json/anime/dragon_ball_vol_11.json',
'dragon_ball_vol_12': 'json/anime/dragon_ball_vol_12.json',
'dragon_ball_vol_13': 'json/anime/dragon_ball_vol_13.json',
'dragon_ball_vol_14': 'json/anime/dragon_ball_vol_14.json',
'dragon_ball_vol_15': 'json/anime/dragon_ball_vol_15.json',
'dragon_ball_vol_16': 'json/anime/dragon_ball_vol_16.json',
'dragon_ball_vol_17': 'json/anime/dragon_ball_vol_17.json',
'dragon_ball_vol_18': 'json/anime/dragon_ball_vol_18.json',
'dragon_ball_vol_19': 'json/anime/dragon_ball_vol_19.json',
'dragon_ball_vol_20': 'json/anime/dragon_ball_vol_20.json',
'dragon_ball_vol_21': 'json/anime/dragon_ball_vol_21.json',
'dragon_ball_vol_22': 'json/anime/dragon_ball_vol_22.json',
'dragon_ball_vol_23': 'json/anime/dragon_ball_vol_23.json',
'dragon_ball_vol_24': 'json/anime/dragon_ball_vol_24.json',
'fairy_tail_vol_1': 'json/anime/fairy_tail_vol_1.json',
'full_metal_alchemist_vol_1': 'json/anime/full_metal_alchemist_vol_1.json',
'funkos_vol_1': 'json/anime/funkos_vol_1.json',
'haikyu_vol_1': 'json/anime/haikyu_vol_1.json',
'hajime_no_ippo_vol_1': 'json/anime/hajime_no_ippo_vol_1.json',
'hentai_vol_1': 'json/anime/hentai_vol_1.json',
'hentai_vol_2': 'json/anime/hentai_vol_2.json',
'hentai_vol_3': 'json/anime/hentai_vol_3.json',
'hunter_x_hunter_vol_1': 'json/anime/hunter_x_hunter_vol_1.json',
'inuyasha_vol_1': 'json/anime/inuyasha_vol_1.json',
'jojos_bizarre_adventure_vol_1': 'json/anime/jojos_bizarre_adventure_vol_1.json',
'jojos_bizarre_adventure_vol_2': 'json/anime/jojos_bizarre_adventure_vol_2.json',
'jujutsu_kaisen_vol_1': 'json/anime/jujutsu_kaisen_vol_1.json',
'jujutsu_kaisen_vol_2': 'json/anime/jujutsu_kaisen_vol_2.json',
'jujutsu_kaisen_vol_3': 'json/anime/jujutsu_kaisen_vol_3.json',
'jujutsu_kaisen_vol_4': 'json/anime/jujutsu_kaisen_vol_4.json',
'kaguya_sama_vol_1': 'json/anime/kaguya_sama_vol_1.json',
'mazinger_z_vol_1': 'json/anime/mazinger_z_vol_1.json',
'mazinger_z_vol_2': 'json/anime/mazinger_z_vol_2.json',
'mob_psycho_vol_1': 'json/anime/mob_psycho_vol_1.json',
'mob_psycho_vol_2': 'json/anime/mob_psycho_vol_2.json',
'my_dressup_darling_1': 'json/anime/my_dressup_darling_1.json',
'my_dressup_darling_2': 'json/anime/my_dressup_darling_2.json',
'nagaroto_vol_1': 'json/anime/nagaroto_vol_1.json',
'nanatsu_no_taizai_vol_1': 'json/anime/nanatsu_no_taizai_vol_1.json',
'naruto_vol_1': 'json/anime/naruto_vol_1.json',
'naruto_vol_2': 'json/anime/naruto_vol_2.json',
'naruto_vol_3': 'json/anime/naruto_vol_3.json',
'naruto_vol_4': 'json/anime/naruto_vol_4.json',
'naruto_vol_5': 'json/anime/naruto_vol_5.json',
'one_piece_vol_1': 'json/anime/one_piece_vol_1.json',
'one_piece_vol_2': 'json/anime/one_piece_vol_2.json',
'one_piece_vol_3': 'json/anime/one_piece_vol_3.json',
'one_piece_vol_4': 'json/anime/one_piece_vol_4.json',
'one_piece_vol_5': 'json/anime/one_piece_vol_5.json',
'one_piece_vol_6': 'json/anime/one_piece_vol_6.json',
'one_piece_vol_7': 'json/anime/one_piece_vol_7.json',
'one_piece_vol_8': 'json/anime/one_piece_vol_8.json',
'one_piece_vol_9': 'json/anime/one_piece_vol_9.json',
'one_piece_vol_10': 'json/anime/one_piece_vol_10.json',
'one_piece_vol_11': 'json/anime/one_piece_vol_11.json',
'one_piece_vol_12': 'json/anime/one_piece_vol_12.json',
'one_punch_man_vol_1': 'json/anime/one_punch_man_vol_1.json',
'one_punch_man_vol_2': 'json/anime/one_punch_man_vol_2.json',
'one_punch_man_vol_3': 'json/anime/one_punch_man_vol_3.json',
'oshi_no_ko_vol_1': 'json/anime/oshi_no_ko_vol_1.json',
'pokemon_vol_1': 'json/anime/pokemon_vol_1.json',
'pokemon_vol_2': 'json/anime/pokemon_vol_2.json',
'pokemon_vol_3': 'json/anime/pokemon_vol_3.json',
'pokemon_vol_4': 'json/anime/pokemon_vol_4.json',
'pokemon_vol_5': 'json/anime/pokemon_vol_5.json',
'pokemon_vol_6': 'json/anime/pokemon_vol_6.json',
'pokemon_vol_7': 'json/anime/pokemon_vol_7.json',
'pokemon_vol_8': 'json/anime/pokemon_vol_8.json',
'pokemon_vol_9': 'json/anime/pokemon_vol_9.json',
'pokemon_vol_10': 'json/anime/pokemon_vol_10.json',
'quintillizas_vol_1': 'json/anime/quintillizas_vol_1.json',
'ranma_vol_1': 'json/anime/ranma_vol_1.json',
'record_of_raknarok_vol_1': 'json/anime/record_of_raknarok_vol_1.json',
'sailor_moon_vol_1': 'json/anime/sailor_moon_vol_1.json',
'sailor_moon_vol_2': 'json/anime/sailor_moon_vol_2.json',
'sailor_moon_vol_3': 'json/anime/sailor_moon_vol_3.json',
'sailor_moon_vol_4': 'json/anime/sailor_moon_vol_4.json',
'slam_dunk_vol_1': 'json/anime/slam_dunk_vol_1.json',
'slam_dunk_vol_2': 'json/anime/slam_dunk_vol_2.json',
'spy_x_family_vol_1': 'json/anime/spy_x_family_vol_1.json',
'spy_x_family_vol_2': 'json/anime/spy_x_family_vol_2.json',
'spy_x_family_vol_3': 'json/anime/spy_x_family_vol_3.json',
'spy_x_family_vol_4': 'json/anime/spy_x_family_vol_4.json',
'spy_x_family_vol_5': 'json/anime/spy_x_family_vol_5.json',
'stein_gate_vol_1': 'json/anime/stein_gate_vol_1.json',
'streetwear_vol_1': 'json/anime/streetwear_vol_1.json',
'streetwear_vol_2': 'json/anime/streetwear_vol_2.json',
'streetwear_vol_3': 'json/anime/streetwear_vol_3.json',
'studio_ghibli_vol_1': 'json/anime/studio_ghibli_vol_1.json',
'tokio_ghoul_vol_1': 'json/anime/tokio_ghoul_vol_1.json',
'tokio_revengers_vol_1': 'json/anime/tokio_revengers_vol_1.json',
'tokio_revengers_vol_2': 'json/anime/tokio_revengers_vol_2.json',
'tokio_revengers_vol_3': 'json/anime/tokio_revengers_vol_3.json',
'tokio_revengers_vol_4': 'json/anime/tokio_revengers_vol_4.json',
'tokio_revengers_vol_5': 'json/anime/tokio_revengers_vol_5.json',
'vindland_saga_vol_1': 'json/anime/vindland_saga_vol_1.json',
'voltron_vol_1': 'json/anime/voltron_vol_1.json',
'waifus_vol_1': 'json/anime/waifus_vol_1.json',
'waifus_vol_2': 'json/anime/waifus_vol_2.json',
'waifus_vol_3': 'json/anime/waifus_vol_3.json',
'waifus_vol_4': 'json/anime/waifus_vol_4.json',
'yu_gi_oh_vol_1': 'json/anime/yu_gi_oh_vol_1.json',
'yu_gi_oh_vol_2': 'json/anime/yu_gi_oh_vol_2.json'
    },
    urbanos: {
        'urbanos_vol_1': 'json/urbanos/urbanos_vol_1.json',
        'urbanos_vol_2': 'json/urbanos/urbanos_vol_2.json',
        'urbanos_vol_3': 'json/urbanos/urbanos_vol_3.json',
        'urbanos_vol_4': 'json/urbanos/urbanos_vol_4.json',
        'urbanos_vol_5': 'json/urbanos/urbanos_vol_5.json',
        'urbanos_vol_6': 'json/urbanos/urbanos_vol_6.json',
        'urbanos_vol_7': 'json/urbanos/urbanos_vol_7.json',
        'urbanos_vol_8': 'json/urbanos/urbanos_vol_8.json',
        'urbanos_vol_9': 'json/urbanos/urbanos_vol_9.json',
        'urbanos_vol_10': 'json/urbanos/urbanos_vol_10.json',
        'urbanos_vol_11': 'json/urbanos/urbanos_vol_11.json',
        'urbanos_vol_12': 'json/urbanos/urbanos_vol_12.json',
        'urbanos_vol_13': 'json/urbanos/urbanos_vol_13.json',
        'urbanos_vol_14': 'json/urbanos/urbanos_vol_14.json',
        'urbanos_vol_15': 'json/urbanos/urbanos_vol_15.json',
        'urbanos_vol_16': 'json/urbanos/urbanos_vol_16.json',
        'urbanos_vol_17': 'json/urbanos/urbanos_vol_17.json',
        'urbanos_vol_18': 'json/urbanos/urbanos_vol_18.json',
        'urbanos_vol_19': 'json/urbanos/urbanos_vol_19.json',
        'urbanos_vol_20': 'json/urbanos/urbanos_vol_20.json',
        'urbanos_vol_21': 'json/urbanos/urbanos_vol_21.json',
        'urbanos_vol_22': 'json/urbanos/urbanos_vol_22.json',
        'urbanos_vol_23': 'json/urbanos/urbanos_vol_23.json',
        'urbanos_vol_24': 'json/urbanos/urbanos_vol_24.json',
        'urbanos_vol_25': 'json/urbanos/urbanos_vol_25.json',
        'urbanos_vol_26': 'json/urbanos/urbanos_vol_26.json',
        'urbanos_vol_27': 'json/urbanos/urbanos_vol_27.json',
        'urbanos_vol_28': 'json/urbanos/urbanos_vol_28.json',
        'urbanos_vol_29': 'json/urbanos/urbanos_vol_29.json',
        'urbanos_vol_30': 'json/urbanos/urbanos_vol_30.json',
        'urbanos_vol_31': 'json/urbanos/urbanos_vol_31.json',
        'urbanos_vol_32': 'json/urbanos/urbanos_vol_32.json',
        'urbanos_vol_33': 'json/urbanos/urbanos_vol_33.json',
        'urbanos_vol_34': 'json/urbanos/urbanos_vol_34.json',
        'urbanos_vol_35': 'json/urbanos/urbanos_vol_35.json',
        'urbanos_vol_36': 'json/urbanos/urbanos_vol_36.json',
        'urbanos_vol_37': 'json/urbanos/urbanos_vol_37.json',
        'urbanos_vol_38': 'json/urbanos/urbanos_vol_38.json',
        'urbanos_vol_39': 'json/urbanos/urbanos_vol_39.json',
        'urbanos_vol_40': 'json/urbanos/urbanos_vol_40.json',
        'urbanos_vol_41': 'json/urbanos/urbanos_vol_41.json',
        'urbanos_vol_42': 'json/urbanos/urbanos_vol_42.json',
        'urbanos_vol_43': 'json/urbanos/urbanos_vol_43.json',
        'urbanos_vol_44': 'json/urbanos/urbanos_vol_44.json',
        'urbanos_vol_45': 'json/urbanos/urbanos_vol_45.json',
        'urbanos_vol_46': 'json/urbanos/urbanos_vol_46.json',
        'urbanos_vol_47': 'json/urbanos/urbanos_vol_47.json'
},
gym: {
  'gym_vol_1': 'json/gym/gym_vol_1.json',
  'gym_vol_2': 'json/gym/gym_vol_2.json',
  'gym_vol_3': 'json/gym/gym_vol_3.json',
  'gym_vol_4': 'json/gym/gym_vol_4.json',
  'gym_vol_5': 'json/gym/gym_vol_5.json'
},
calacas: {
  'calacas_vol_1': 'json/calacas/calacas_vol_1.json',
  'calacas_vol_2': 'json/calacas/calacas_vol_2.json',
  'calacas_vol_3': 'json/calacas/calacas_vol_3.json',
  'calacas_vol_4': 'json/calacas/calacas_vol_4.json',
  'calacas_vol_5': 'json/calacas/calacas_vol_5.json',
  'calacas_vol_6': 'json/calacas/calacas_vol_6.json',
  'calacas_vol_7': 'json/calacas/calacas_vol_7.json'
},
san_valentin: {
  'san_valentin_vol_1': 'json/san_valentin/san_valentin_vol_1.json',
  'san_valentin_vol_2': 'json/san_valentin/san_valentin_vol_2.json',
  'san_valentin_vol_3': 'json/san_valentin/san_valentin_vol_3.json',
  'among_us_vol_1': 'json/san_valentin/among_us_vol_1.json',
  'aesthetic_vol_1': 'json/san_valentin/aesthetic_vol_1.json',
  'caligrama_vol_1': 'json/san_valentin/caligrama_vol_1.json',
  'groovy_vol_1': 'json/san_valentin/groovy_vol_1.json',
  'parejas_vol_1': 'json/san_valentin/parejas_vol_1.json',
  'parejas_vol_2': 'json/san_valentin/parejas_vol_2.json',
  'parejas_vol_3': 'json/san_valentin/parejas_vol_3.json',
  'parejas_vol_4': 'json/san_valentin/parejas_vol_4.json'
},
marcas: {
  'adidas_vol_1': 'json/marcas/adidas_vol_1.json',
  'adidas_vol_2': 'json/marcas/adidas_vol_2.json',
  'marcas_vol_1': 'json/marcas/marcas_vol_1.json',
  'marcas_vol_2': 'json/marcas/marcas_vol_2.json',
  'marcas_vol_3': 'json/marcas/marcas_vol_3.json',
  'marcas_vol_4': 'json/marcas/marcas_vol_4.json',
  'marcas_vol_5': 'json/marcas/marcas_vol_5.json',
  'psycho_bunny_vol_1': 'json/marcas/psycho_bunny_vol_1.json',
  'psycho_bunny_vol_2': 'json/marcas/psycho_bunny_vol_2.json',
  'psycho_bunny_vol_3': 'json/marcas/psycho_bunny_vol_3.json',
  'psycho_bunny_vol_4': 'json/marcas/psycho_bunny_vol_4.json',
  'psycho_bunny_vol_5': 'json/marcas/psycho_bunny_vol_5.json',
  'psycho_bunny_vol_6': 'json/marcas/psycho_bunny_vol_6.json',
  'psycho_bunny_vol_7': 'json/marcas/psycho_bunny_vol_7.json',
  'retro_vol_1': 'json/marcas/retro_vol_1.json',
  'tommy_hilfiger_vol_1': 'json/marcas/tommy_hilfiger_vol_1.json'
},
vehiculos: {
'carros_vol_1': 'json/vehiculos/carros_vol_1.json',
'carros_vol_2': 'json/vehiculos/carros_vol_2.json',
'carros_vol_3': 'json/vehiculos/carros_vol_3.json',
'carros_vol_4': 'json/vehiculos/carros_vol_4.json',
'carros_vol_5': 'json/vehiculos/carros_vol_5.json',
'carros_vol_6': 'json/vehiculos/carros_vol_6.json',
'clasicos_vol_1': 'json/vehiculos/clasicos_vol_1.json',
'ferrari_vol_1': 'json/vehiculos/ferrari_vol_1.json',
'formula_vol_1': 'json/vehiculos/formula_vol_1.json',
'hot_road_vol_1': 'json/vehiculos/hot_road_vol_1.json',
'militares_vol_1': 'json/vehiculos/militares_vol_1.json',
'motocicletas_vol_1': 'json/vehiculos/motocicletas_vol_1.json',
'racing_vol_1': 'json/vehiculos/racing_vol_1.json',
'supra_vol_1': 'json/vehiculos/supra_vol_1.json'
}
};

function loadProducts(category, volume) {
    const categoryPaths = jsonPaths[category];

    if (!categoryPaths) {
        alert('¡Diseños aún por cargar! x_x');
        return;
    }

    const jsonFilePath = categoryPaths[volume];

    if (!jsonFilePath) {
        alert('¡Colección no válida! +_+');
        return;
    }

    // Cargar el archivo JSON usando fetch
    fetch(jsonFilePath)
        .then(response => response.json())
        .then(data => {
            if (!data || data.length === 0) {
                alert('No hay productos disponibles para esta colección.');
                return;
            }

            // Paginación: filtrar los elementos según la página actual
            const totalItems = data.length;
            const start = (currentPage - 1) * itemsPerPage;
            const end = currentPage * itemsPerPage;
            const currentPageItems = data.slice(start, end);

            // Mostrar los productos
            const container = document.querySelector('.container-b');
            container.innerHTML = ''; // Limpiar el contenedor antes de agregar nuevos productos

            currentPageItems.forEach(item => {
                const div = document.createElement('div');
                div.classList.add('box-t');
                div.setAttribute('data-name', item.name);
                div.setAttribute('data-hot', item.hot);
                div.setAttribute('data-new', item.new);
                div.setAttribute('data-date', item.date);
                div.setAttribute('data-image', item.image);
                div.setAttribute('data-link', item.link);

                // Crear un contenedor para la imagen con un loader
                const imgContainer = document.createElement('div');
                imgContainer.classList.add('img-container');

                // Agregar un loader animado (spinner)
                const loader = document.createElement('div');
                loader.classList.add('loader');

                // Crear la imagen
                const img = document.createElement('img');
                img.classList.add('hover-img');
                img.src = item.image;
                img.style.opacity = 0; // Hide the image initially

                // Agregar loader e imagen al contenedor de la imagen
                imgContainer.appendChild(loader);
                imgContainer.appendChild(img);

                // Crear el texto con el nombre del diseño
                const p = document.createElement('p');
                p.classList.add('overlay-text-b');
                p.innerText = item.name;

                // Crear el botón de expansión
                const expandButton = document.createElement('button');
                expandButton.classList.add('btn-expand-b');
                expandButton.innerHTML = '<i class="fa-solid fa-expand"></i>';
                expandButton.setAttribute("data-text", "FULLSCREEN");
                expandButton.onclick = function () {
                    openModal(item);
                };

                // Crear botón de link
                const whatsappButton = document.createElement('button');
                whatsappButton.classList.add('btn-whatsapp-b');
                whatsappButton.innerHTML = '<i class="fa-solid fa-star"></i>';
                whatsappButton.setAttribute("data-text", "!LO QUIERO!");

                whatsappButton.onclick = function () {
                    const urlParams = new URLSearchParams(window.location.search);
                    const category = urlParams.get('category');
                    const vol = urlParams.get('vol');

                    const image = item.image;
                    const name = item.name;
                    const link = item.link;

                    window.location.href = `design.html?image=${image}&name=${name}&link=${encodeURIComponent(link)}&category=${encodeURIComponent(category)}&vol=${encodeURIComponent(vol)}`;
                };

                // Añadir elementos al contenedor del diseño
                div.appendChild(imgContainer);
                div.appendChild(p);
                div.appendChild(expandButton);
                div.appendChild(whatsappButton);

                // Añadir el diseño al contenedor principal
                container.appendChild(div);

                // Load event listener after appending the image to the DOM
                img.addEventListener('load', () => {
                  img.style.opacity = 1; // Fade in the image
                  loader.style.display = 'none'; // Hide the loader
                });

                // Optional: Error handling
                img.addEventListener('error', (error) => {
                  console.error('Error loading image:', item.image, error);
                  loader.style.display = 'none'; // Hide loader on error
                  // Optionally show an error message or placeholder
                });
            });

            // Actualizar la paginación
            updatePagination(totalItems);
        })
        .catch(error => {
            console.error('Error al cargar el archivo JSON:', error);
            alert('Hubo un error al cargar los productos.');
        });
}



// Función para abrir el modal y cargar la imagen seleccionada
function openModal(item) {
    const imageSrc = item.image;
    document.getElementById('modalImage').src = imageSrc;
    document.getElementById('imageModal').style.display = "block";
}

// Función para cerrar el modal
function closeModal() {
    document.getElementById('imageModal').style.display = "none";
}

// Función para abrir el link desde el atributo data-link
function openLink(item) {
    const linkUrl = item.link; // Acceder a la propiedad 'link' del objeto item
    window.location.href = linkUrl; // Redirigir a la URL
}


// Función para actualizar los botones de paginación
function updatePagination(totalItems) {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const paginationContainer = document.querySelector('.pagination');
    const pageNumbersContainer = paginationContainer.querySelector('.page-numbers');
    pageNumbersContainer.innerHTML = ''; // Limpiar los botones de paginación

    // Botón de "Anterior"
    const prevButton = paginationContainer.querySelector('.prev');
    prevButton.disabled = currentPage === 1;
    prevButton.addEventListener('click', function () {
        if (currentPage > 1) {
            currentPage--;
            loadProducts(currentCategory, currentVolume); // Volver a cargar productos de la nueva página
        }
    });

    // Determinar la cantidad de páginas a mostrar según el ancho de pantalla
    let maxPagesToShow = window.innerWidth <= 768 ? 3 : 14;

    // Calcular el rango de páginas a mostrar
    let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
    let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

    // Ajustar si estamos cerca del inicio o el final
    if (endPage - startPage + 1 < maxPagesToShow) {
        startPage = Math.max(1, endPage - maxPagesToShow + 1);
    }

    // Botones de páginas
    for (let i = startPage; i <= endPage; i++) {
        const pageButton = document.createElement('button');
        pageButton.textContent = i;
        pageButton.classList.add('page-number');
        if (i === currentPage) {
            pageButton.classList.add('active');
        }

        pageButton.addEventListener('click', function () {
            currentPage = i;
            loadProducts(currentCategory, currentVolume); // Volver a cargar productos de la nueva página
        });

        pageNumbersContainer.appendChild(pageButton);
    }


    // Botón de "Siguiente"
    const nextButton = paginationContainer.querySelector('.next');
    nextButton.disabled = currentPage === totalPages;
    nextButton.addEventListener('click', function () {
        if (currentPage < totalPages) {
            currentPage++;
            loadProducts(currentCategory, currentVolume); // Volver a cargar productos de la nueva página
        }
    });
}



// Obtener los parámetros de la URL
function getURLParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Cuando la página esté cargada, procesamos los parámetros de la URL
window.addEventListener('DOMContentLoaded', function () {
    const category = getURLParameter('category');
    const volume = getURLParameter('vol');

    if (category && volume) {
        currentCategory = category;
        currentVolume = volume;
        loadProducts(category, volume);
    } else {
        alert('Faltan parámetros de categoría o volumen.');
    }
});
