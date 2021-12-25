(function() {var implementors = {};
implementors["poise"] = [{"text":"impl Freeze for <a class=\"struct\" href=\"poise/struct.MalformedCodeBlock.html\" title=\"struct poise::MalformedCodeBlock\">MalformedCodeBlock</a>","synthetic":true,"types":["poise::prefix::argument::code_block::MalformedCodeBlock"]},{"text":"impl Freeze for <a class=\"struct\" href=\"poise/struct.CodeBlock.html\" title=\"struct poise::CodeBlock\">CodeBlock</a>","synthetic":true,"types":["poise::prefix::argument::code_block::CodeBlock"]},{"text":"impl Freeze for <a class=\"struct\" href=\"poise/struct.KeyValueArgs.html\" title=\"struct poise::KeyValueArgs\">KeyValueArgs</a>","synthetic":true,"types":["poise::prefix::argument::key_value_args::KeyValueArgs"]},{"text":"impl Freeze for <a class=\"struct\" href=\"poise/struct.TooManyArguments.html\" title=\"struct poise::TooManyArguments\">TooManyArguments</a>","synthetic":true,"types":["poise::prefix::argument::TooManyArguments"]},{"text":"impl Freeze for <a class=\"struct\" href=\"poise/struct.TooFewArguments.html\" title=\"struct poise::TooFewArguments\">TooFewArguments</a>","synthetic":true,"types":["poise::prefix::argument::TooFewArguments"]},{"text":"impl Freeze for <a class=\"struct\" href=\"poise/struct.InvalidChoice.html\" title=\"struct poise::InvalidChoice\">InvalidChoice</a>","synthetic":true,"types":["poise::prefix::argument::InvalidChoice"]},{"text":"impl Freeze for <a class=\"struct\" href=\"poise/struct.EditTracker.html\" title=\"struct poise::EditTracker\">EditTracker</a>","synthetic":true,"types":["poise::prefix::track_edits::EditTracker"]},{"text":"impl&lt;'a, U, E&gt; Freeze for <a class=\"struct\" href=\"poise/struct.PrefixContext.html\" title=\"struct poise::PrefixContext\">PrefixContext</a>&lt;'a, U, E&gt;","synthetic":true,"types":["poise::prefix::structs::PrefixContext"]},{"text":"impl Freeze for <a class=\"enum\" href=\"poise/enum.Prefix.html\" title=\"enum poise::Prefix\">Prefix</a>","synthetic":true,"types":["poise::prefix::structs::Prefix"]},{"text":"impl&lt;U, E&gt; !Freeze for <a class=\"struct\" href=\"poise/struct.PrefixFrameworkOptions.html\" title=\"struct poise::PrefixFrameworkOptions\">PrefixFrameworkOptions</a>&lt;U, E&gt;","synthetic":true,"types":["poise::prefix::structs::PrefixFrameworkOptions"]},{"text":"impl&lt;'a&gt; Freeze for <a class=\"enum\" href=\"poise/enum.ApplicationCommandOrAutocompleteInteraction.html\" title=\"enum poise::ApplicationCommandOrAutocompleteInteraction\">ApplicationCommandOrAutocompleteInteraction</a>&lt;'a&gt;","synthetic":true,"types":["poise::slash::structs::ApplicationCommandOrAutocompleteInteraction"]},{"text":"impl&lt;'a, U, E&gt; Freeze for <a class=\"struct\" href=\"poise/struct.ApplicationContext.html\" title=\"struct poise::ApplicationContext\">ApplicationContext</a>&lt;'a, U, E&gt;","synthetic":true,"types":["poise::slash::structs::ApplicationContext"]},{"text":"impl&lt;U, E&gt; Freeze for <a class=\"enum\" href=\"poise/enum.ContextMenuCommandAction.html\" title=\"enum poise::ContextMenuCommandAction\">ContextMenuCommandAction</a>&lt;U, E&gt;","synthetic":true,"types":["poise::slash::structs::ContextMenuCommandAction"]},{"text":"impl&lt;U, E&gt; Freeze for <a class=\"struct\" href=\"poise/struct.CommandParameter.html\" title=\"struct poise::CommandParameter\">CommandParameter</a>&lt;U, E&gt;","synthetic":true,"types":["poise::slash::structs::CommandParameter"]},{"text":"impl Freeze for <a class=\"enum\" href=\"poise/enum.SlashArgError.html\" title=\"enum poise::SlashArgError\">SlashArgError</a>","synthetic":true,"types":["poise::slash::argument::slash::SlashArgError"]},{"text":"impl Freeze for <a class=\"struct\" href=\"poise/struct.IntegerOutOfBounds.html\" title=\"struct poise::IntegerOutOfBounds\">IntegerOutOfBounds</a>","synthetic":true,"types":["poise::slash::argument::slash::IntegerOutOfBounds"]},{"text":"impl&lt;T&gt; Freeze for <a class=\"struct\" href=\"poise/struct.AutocompleteChoice.html\" title=\"struct poise::AutocompleteChoice\">AutocompleteChoice</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Freeze,&nbsp;</span>","synthetic":true,"types":["poise::slash::argument::autocomplete::AutocompleteChoice"]},{"text":"impl&lt;F&gt; Freeze for <a class=\"struct\" href=\"poise/struct.EventWrapper.html\" title=\"struct poise::EventWrapper\">EventWrapper</a>&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Freeze,&nbsp;</span>","synthetic":true,"types":["poise::event::EventWrapper"]},{"text":"impl&lt;'a&gt; Freeze for <a class=\"enum\" href=\"poise/enum.Event.html\" title=\"enum poise::Event\">Event</a>&lt;'a&gt;","synthetic":true,"types":["poise::event::Event"]},{"text":"impl&lt;'a, U, E&gt; Freeze for <a class=\"enum\" href=\"poise/enum.Context.html\" title=\"enum poise::Context\">Context</a>&lt;'a, U, E&gt;","synthetic":true,"types":["poise::structs::context::Context"]},{"text":"impl&lt;'a, U, E&gt; Freeze for <a class=\"struct\" href=\"poise/struct.PartialContext.html\" title=\"struct poise::PartialContext\">PartialContext</a>&lt;'a, U, E&gt;","synthetic":true,"types":["poise::structs::context::PartialContext"]},{"text":"impl&lt;U, E&gt; !Freeze for <a class=\"struct\" href=\"poise/struct.FrameworkOptions.html\" title=\"struct poise::FrameworkOptions\">FrameworkOptions</a>&lt;U, E&gt;","synthetic":true,"types":["poise::structs::framework_options::FrameworkOptions"]},{"text":"impl&lt;U, E&gt; !Freeze for <a class=\"struct\" href=\"poise/struct.Command.html\" title=\"struct poise::Command\">Command</a>&lt;U, E&gt;","synthetic":true,"types":["poise::structs::Command"]},{"text":"impl&lt;'a, U, E&gt; Freeze for <a class=\"enum\" href=\"poise/enum.FrameworkError.html\" title=\"enum poise::FrameworkError\">FrameworkError</a>&lt;'a, U, E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;E: Freeze,&nbsp;</span>","synthetic":true,"types":["poise::structs::FrameworkError"]},{"text":"impl&lt;U, E&gt; !Freeze for <a class=\"struct\" href=\"poise/struct.FrameworkBuilder.html\" title=\"struct poise::FrameworkBuilder\">FrameworkBuilder</a>&lt;U, E&gt;","synthetic":true,"types":["poise::framework::builder::FrameworkBuilder"]},{"text":"impl&lt;U, E&gt; !Freeze for <a class=\"struct\" href=\"poise/struct.Framework.html\" title=\"struct poise::Framework\">Framework</a>&lt;U, E&gt;","synthetic":true,"types":["poise::framework::Framework"]},{"text":"impl&lt;'a&gt; Freeze for <a class=\"struct\" href=\"poise/struct.CreateReply.html\" title=\"struct poise::CreateReply\">CreateReply</a>&lt;'a&gt;","synthetic":true,"types":["poise::reply::CreateReply"]},{"text":"impl&lt;'a&gt; Freeze for <a class=\"enum\" href=\"poise/enum.ReplyHandle.html\" title=\"enum poise::ReplyHandle\">ReplyHandle</a>&lt;'a&gt;","synthetic":true,"types":["poise::reply::ReplyHandle"]},{"text":"impl Freeze for <a class=\"struct\" href=\"poise/struct.CooldownConfig.html\" title=\"struct poise::CooldownConfig\">CooldownConfig</a>","synthetic":true,"types":["poise::cooldown::CooldownConfig"]},{"text":"impl Freeze for <a class=\"struct\" href=\"poise/struct.Cooldowns.html\" title=\"struct poise::Cooldowns\">Cooldowns</a>","synthetic":true,"types":["poise::cooldown::Cooldowns"]},{"text":"impl&lt;'a&gt; Freeze for <a class=\"struct\" href=\"poise/builtins/struct.HelpConfiguration.html\" title=\"struct poise::builtins::HelpConfiguration\">HelpConfiguration</a>&lt;'a&gt;","synthetic":true,"types":["poise::builtins::help::HelpConfiguration"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()