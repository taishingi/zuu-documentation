var sourcesIndex = JSON.parse('{\
"acceptance":["",[],["lib.rs"]],\
"accessibility":["",[],["lib.rs"]],\
"aho_corasick":["",[["packed",[["teddy",[],["compile.rs","mod.rs","runtime.rs"]]],["api.rs","mod.rs","pattern.rs","rabinkarp.rs","vector.rs"]]],["ahocorasick.rs","automaton.rs","buffer.rs","byte_frequencies.rs","classes.rs","dfa.rs","error.rs","lib.rs","nfa.rs","prefilter.rs","state_id.rs"]],\
"alpha":["",[],["lib.rs"]],\
"api":["",[],["lib.rs"]],\
"approx":["",[],["lib.rs","macros.rs"]],\
"automated":["",[],["lib.rs"]],\
"beta":["",[],["lib.rs"]],\
"blackbox":["",[],["lib.rs"]],\
"bytemuck":["",[],["anybitpattern.rs","checked.rs","contiguous.rs","internal.rs","lib.rs","no_uninit.rs","offset_of.rs","pod.rs","pod_in_option.rs","transparent.rs","zeroable.rs","zeroable_in_option.rs"]],\
"cfg_if":["",[],["lib.rs"]],\
"cgmath":["",[],["angle.rs","conv.rs","euler.rs","lib.rs","macros.rs","matrix.rs","num.rs","point.rs","prelude.rs","projection.rs","quaternion.rs","rotation.rs","structure.rs","transform.rs","vector.rs"]],\
"colored_truecolor":["",[],["color.rs","control.rs","lib.rs","style.rs"]],\
"compatibility":["",[],["lib.rs"]],\
"component":["",[],["lib.rs"]],\
"concurrent":["",[],["lib.rs"]],\
"conformance":["",[],["lib.rs"]],\
"continuous":["",[],["lib.rs"]],\
"coverage":["",[],["lib.rs"]],\
"destructive":["",[],["lib.rs"]],\
"development":["",[],["lib.rs"]],\
"difflib":["",[],["differ.rs","lib.rs","sequencematcher.rs","utils.rs"]],\
"downcast":["",[],["lib.rs"]],\
"either":["",[],["lib.rs"]],\
"exploratory":["",[],["lib.rs"]],\
"fixture":["",[],["lib.rs"]],\
"float_cmp":["",[],["eq.rs","lib.rs","macros.rs","ratio.rs","ulps.rs","ulps_eq.rs"]],\
"fragile":["",[],["errors.rs","fragile.rs","lib.rs","registry.rs","semisticky.rs","sticky.rs","thread_id.rs"]],\
"functional":["",[],["lib.rs"]],\
"greybox":["",[],["lib.rs"]],\
"installation":["",[],["installation.rs"]],\
"integration":["",[],["lib.rs"]],\
"internationalization":["",[],["lib.rs"]],\
"is_executable":["",[],["lib.rs"]],\
"itertools":["",[["adaptors",[],["coalesce.rs","map.rs","mod.rs","multi_product.rs"]]],["combinations.rs","combinations_with_replacement.rs","concat_impl.rs","cons_tuples_impl.rs","diff.rs","duplicates_impl.rs","either_or_both.rs","exactly_one_err.rs","extrema_set.rs","flatten_ok.rs","format.rs","free.rs","group_map.rs","groupbylazy.rs","grouping_map.rs","impl_macros.rs","intersperse.rs","k_smallest.rs","kmerge_impl.rs","lazy_buffer.rs","lib.rs","merge_join.rs","minmax.rs","multipeek_impl.rs","pad_tail.rs","peek_nth.rs","peeking_take_while.rs","permutations.rs","powerset.rs","process_results_impl.rs","put_back_n_impl.rs","rciter_impl.rs","repeatn.rs","size_hint.rs","sources.rs","tee.rs","tuple_impl.rs","unique_impl.rs","unziptuple.rs","with_position.rs","zip_eq_impl.rs","zip_longest.rs","ziptuple.rs"]],\
"lazy_static":["",[],["inline_lazy.rs","lib.rs"]],\
"libc":["",[["unix",[["linux_like",[["linux",[["arch",[["generic",[],["mod.rs"]]],["mod.rs"]],["gnu",[["b64",[["x86_64",[],["align.rs","mod.rs","not_x32.rs"]]],["mod.rs"]]],["align.rs","mod.rs"]]],["align.rs","mod.rs","non_exhaustive.rs"]]],["mod.rs"]]],["align.rs","mod.rs"]]],["fixed_width_ints.rs","lib.rs","macros.rs"]],\
"maplit":["",[],["lib.rs"]],\
"memchr":["",[["memchr",[["x86",[],["avx.rs","mod.rs","sse2.rs"]]],["fallback.rs","iter.rs","mod.rs","naive.rs"]],["memmem",[["prefilter",[["x86",[],["avx.rs","mod.rs","sse.rs"]]],["fallback.rs","genericsimd.rs","mod.rs"]],["x86",[],["avx.rs","mod.rs","sse.rs"]]],["byte_frequencies.rs","genericsimd.rs","mod.rs","rabinkarp.rs","rarebytes.rs","twoway.rs","util.rs","vector.rs"]]],["cow.rs","lib.rs"]],\
"metamorphic":["",[],["lib.rs"]],\
"mockall":["",[],["examples.rs","lib.rs"]],\
"mockall_derive":["",[],["automock.rs","lib.rs","mock_function.rs","mock_item.rs","mock_item_struct.rs","mock_trait.rs","mockable_item.rs","mockable_struct.rs"]],\
"nofunctional":["",[],["lib.rs"]],\
"normalize_line_endings":["",[],["lib.rs"]],\
"num":["",[],["lib.rs"]],\
"num_bigint":["",[["bigint",[],["addition.rs","bits.rs","convert.rs","division.rs","multiplication.rs","power.rs","shift.rs","subtraction.rs"]],["biguint",[],["addition.rs","bits.rs","convert.rs","division.rs","iter.rs","monty.rs","multiplication.rs","power.rs","shift.rs","subtraction.rs"]]],["bigint.rs","biguint.rs","lib.rs","macros.rs"]],\
"num_complex":["",[],["cast.rs","complex_float.rs","lib.rs","pow.rs"]],\
"num_integer":["",[],["average.rs","lib.rs","roots.rs"]],\
"num_iter":["",[],["lib.rs"]],\
"num_rational":["",[],["lib.rs","pow.rs"]],\
"outputcomparison":["",[],["lib.rs"]],\
"performances":["",[],["performances.rs"]],\
"predicates":["",[["float",[],["close.rs","mod.rs"]],["path",[],["existence.rs","fc.rs","fs.rs","ft.rs","mod.rs"]],["str",[],["adapters.rs","basics.rs","difference.rs","mod.rs","normalize.rs","regex.rs"]]],["boolean.rs","boxed.rs","color.rs","constant.rs","function.rs","iter.rs","lib.rs","name.rs","ord.rs","prelude.rs","utils.rs"]],\
"predicates_core":["",[],["core.rs","lib.rs","reflection.rs"]],\
"predicates_tree":["",[],["lib.rs"]],\
"proc_macro2":["",[],["detection.rs","extra.rs","fallback.rs","lib.rs","marker.rs","parse.rs","rcvec.rs","wrapper.rs"]],\
"progress_bar":["",[],["global.rs","lib.rs","pb.rs","style.rs"]],\
"property":["",[],["lib.rs"]],\
"quality":["",[],["lib.rs"]],\
"quote":["",[],["ext.rs","format.rs","ident_fragment.rs","lib.rs","runtime.rs","spanned.rs","to_tokens.rs"]],\
"rand":["",[["distributions",[],["exponential.rs","gamma.rs","mod.rs","normal.rs","range.rs","ziggurat_tables.rs"]],["prng",[],["chacha.rs","isaac.rs","isaac64.rs","mod.rs","xorshift.rs"]]],["jitter.rs","lib.rs","os.rs","rand_impls.rs","read.rs","reseeding.rs","seq.rs"]],\
"regex":["",[["literal",[],["imp.rs","mod.rs"]]],["backtrack.rs","compile.rs","dfa.rs","error.rs","exec.rs","expand.rs","find_byte.rs","input.rs","lib.rs","pikevm.rs","pool.rs","prog.rs","re_builder.rs","re_bytes.rs","re_set.rs","re_trait.rs","re_unicode.rs","sparse.rs","utf8.rs"]],\
"regex_syntax":["",[["ast",[],["mod.rs","parse.rs","print.rs","visitor.rs"]],["hir",[["literal",[],["mod.rs"]]],["interval.rs","mod.rs","print.rs","translate.rs","visitor.rs"]],["unicode_tables",[],["age.rs","case_folding_simple.rs","general_category.rs","grapheme_cluster_break.rs","mod.rs","perl_word.rs","property_bool.rs","property_names.rs","property_values.rs","script.rs","script_extension.rs","sentence_break.rs","word_break.rs"]]],["either.rs","error.rs","lib.rs","parser.rs","unicode.rs","utf8.rs"]],\
"regression":["",[],["lib.rs"]],\
"rgb":["",[["internal",[["convert",[],["array.rs","mod.rs","tuple.rs"]]],["ops.rs","pixel.rs","rgb.rs","rgba.rs"]]],["alt.rs","lib.rs"]],\
"security":["",[],["lib.rs"]],\
"smokesanity":["",[],["lib.rs"]],\
"syn":["",[["gen",[],["clone.rs","debug.rs","eq.rs","hash.rs"]]],["attr.rs","await.rs","bigint.rs","buffer.rs","custom_keyword.rs","custom_punctuation.rs","data.rs","derive.rs","discouraged.rs","drops.rs","error.rs","export.rs","expr.rs","ext.rs","file.rs","gen_helper.rs","generics.rs","group.rs","ident.rs","item.rs","lib.rs","lifetime.rs","lit.rs","lookahead.rs","mac.rs","macros.rs","op.rs","parse.rs","parse_macro_input.rs","parse_quote.rs","pat.rs","path.rs","print.rs","punctuated.rs","reserved.rs","sealed.rs","span.rs","spanned.rs","stmt.rs","thread.rs","token.rs","tt.rs","ty.rs","verbatim.rs","whitespace.rs"]],\
"system":["",[],["lib.rs"]],\
"termtree":["",[],["lib.rs"]],\
"ui":["",[],["lib.rs"]],\
"unicode_ident":["",[],["lib.rs","tables.rs"]],\
"unit":["",[],["unit.rs"]],\
"usability":["",[],["lib.rs"]],\
"vcr":["",[],["lib.rs"]],\
"visual":["",[],["lib.rs"]],\
"vulnerability":["",[],["lib.rs"]],\
"whitebox":["",[],["lib.rs"]],\
"winapi":["",[],["lib.rs"]],\
"winconsole":["",[],["lib.rs"]],\
"zuu":["",[],["main.rs"]]\
}');
createSourceSidebar();
