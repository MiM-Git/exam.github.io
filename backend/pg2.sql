PGDMP     8    9                z           Exam_Creator    14.3    14.3 (    ?           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            ?           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            ?           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            ?           1262    16714    Exam_Creator    DATABASE     c   CREATE DATABASE "Exam_Creator" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'en_US.UTF-8';
    DROP DATABASE "Exam_Creator";
                postgres    false                        3079    16715 	   uuid-ossp 	   EXTENSION     ?   CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA public;
    DROP EXTENSION "uuid-ossp";
                   false            ?           0    0    EXTENSION "uuid-ossp"    COMMENT     W   COMMENT ON EXTENSION "uuid-ossp" IS 'generate universally unique identifiers (UUIDs)';
                        false    2            ?            1259    16804    exam    TABLE     ?  CREATE TABLE public.exam (
    id integer NOT NULL,
    name character varying(100),
    start_time timestamp without time zone,
    end_time timestamp without time zone,
    uni_name character varying(100),
    search_exam character varying DEFAULT split_part(((public.uuid_generate_v4())::character varying)::text, '-'::text, 1),
    password character varying,
    master_id integer,
    url uuid DEFAULT public.uuid_generate_v4(),
    random_question boolean,
    random_answer boolean
);
    DROP TABLE public.exam;
       public         heap    postgres    false    2    2            ?            1255    17180    select_exam(integer)    FUNCTION     ?   CREATE FUNCTION public.select_exam(argument1 integer) RETURNS SETOF public.exam
    LANGUAGE sql
    AS $$
     select *
     from exam
     where id = argument1;
 $$;
 5   DROP FUNCTION public.select_exam(argument1 integer);
       public          postgres    false    213            ?            1259    17182    choice    TABLE     t   CREATE TABLE public.choice (
    id integer NOT NULL,
    txt text,
    correct boolean,
    question_id integer
);
    DROP TABLE public.choice;
       public         heap    postgres    false            ?            1259    17181    choice_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.choice_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.choice_id_seq;
       public          postgres    false    217            ?           0    0    choice_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.choice_id_seq OWNED BY public.choice.id;
          public          postgres    false    216            ?            1259    16803    exam_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.exam_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 "   DROP SEQUENCE public.exam_id_seq;
       public          postgres    false    213            ?           0    0    exam_id_seq    SEQUENCE OWNED BY     ;   ALTER SEQUENCE public.exam_id_seq OWNED BY public.exam.id;
          public          postgres    false    212            ?            1259    17167 	   questions    TABLE     ?   CREATE TABLE public.questions (
    id integer NOT NULL,
    type character varying(20),
    exam_id integer,
    file_address text,
    question text,
    file_name character varying(200)
);
    DROP TABLE public.questions;
       public         heap    postgres    false            ?            1259    17166    questions_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.questions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.questions_id_seq;
       public          postgres    false    215            ?           0    0    questions_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public.questions_id_seq OWNED BY public.questions.id;
          public          postgres    false    214            ?            1259    16726    users    TABLE       CREATE TABLE public.users (
    id integer NOT NULL,
    name character varying(50),
    family character varying(50),
    email character varying(200),
    password character varying(200),
    type character varying(50),
    uid uuid DEFAULT public.uuid_generate_v4()
);
    DROP TABLE public.users;
       public         heap    postgres    false    2            ?            1259    16732    users_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.users_id_seq;
       public          postgres    false    210            ?           0    0    users_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;
          public          postgres    false    211            ?           2604    17185 	   choice id    DEFAULT     f   ALTER TABLE ONLY public.choice ALTER COLUMN id SET DEFAULT nextval('public.choice_id_seq'::regclass);
 8   ALTER TABLE public.choice ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    216    217    217            ?           2604    16807    exam id    DEFAULT     b   ALTER TABLE ONLY public.exam ALTER COLUMN id SET DEFAULT nextval('public.exam_id_seq'::regclass);
 6   ALTER TABLE public.exam ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    213    212    213            ?           2604    17170    questions id    DEFAULT     l   ALTER TABLE ONLY public.questions ALTER COLUMN id SET DEFAULT nextval('public.questions_id_seq'::regclass);
 ;   ALTER TABLE public.questions ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    214    215    215            ?           2604    16733    users id    DEFAULT     d   ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);
 7   ALTER TABLE public.users ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    211    210            ?          0    17182    choice 
   TABLE DATA           ?   COPY public.choice (id, txt, correct, question_id) FROM stdin;
    public          postgres    false    217   k,       ?          0    16804    exam 
   TABLE DATA           ?   COPY public.exam (id, name, start_time, end_time, uni_name, search_exam, password, master_id, url, random_question, random_answer) FROM stdin;
    public          postgres    false    213   ?,       ?          0    17167 	   questions 
   TABLE DATA           Y   COPY public.questions (id, type, exam_id, file_address, question, file_name) FROM stdin;
    public          postgres    false    215   ?0       ?          0    16726    users 
   TABLE DATA           M   COPY public.users (id, name, family, email, password, type, uid) FROM stdin;
    public          postgres    false    210   c1       ?           0    0    choice_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.choice_id_seq', 5, true);
          public          postgres    false    216            ?           0    0    exam_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.exam_id_seq', 24, true);
          public          postgres    false    212            ?           0    0    questions_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.questions_id_seq', 19, true);
          public          postgres    false    214            ?           0    0    users_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.users_id_seq', 31, true);
          public          postgres    false    211            
           2606    17189    choice choice_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.choice
    ADD CONSTRAINT choice_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.choice DROP CONSTRAINT choice_pkey;
       public            postgres    false    217                       2606    16812    exam exam_pkey 
   CONSTRAINT     L   ALTER TABLE ONLY public.exam
    ADD CONSTRAINT exam_pkey PRIMARY KEY (id);
 8   ALTER TABLE ONLY public.exam DROP CONSTRAINT exam_pkey;
       public            postgres    false    213                       2606    16814    exam exam_search_exam_key 
   CONSTRAINT     [   ALTER TABLE ONLY public.exam
    ADD CONSTRAINT exam_search_exam_key UNIQUE (search_exam);
 C   ALTER TABLE ONLY public.exam DROP CONSTRAINT exam_search_exam_key;
       public            postgres    false    213                       2606    17174    questions questions_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.questions
    ADD CONSTRAINT questions_pkey PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.questions DROP CONSTRAINT questions_pkey;
       public            postgres    false    215                        2606    16741    users users_email_key 
   CONSTRAINT     Q   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);
 ?   ALTER TABLE ONLY public.users DROP CONSTRAINT users_email_key;
       public            postgres    false    210                       2606    16735    users users_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            postgres    false    210                       2606    17190    choice choice_question_id_fkey    FK CONSTRAINT     ?   ALTER TABLE ONLY public.choice
    ADD CONSTRAINT choice_question_id_fkey FOREIGN KEY (question_id) REFERENCES public.questions(id);
 H   ALTER TABLE ONLY public.choice DROP CONSTRAINT choice_question_id_fkey;
       public          postgres    false    217    215    3848                       2606    16815    exam exam_master_id_fkey    FK CONSTRAINT     y   ALTER TABLE ONLY public.exam
    ADD CONSTRAINT exam_master_id_fkey FOREIGN KEY (master_id) REFERENCES public.users(id);
 B   ALTER TABLE ONLY public.exam DROP CONSTRAINT exam_master_id_fkey;
       public          postgres    false    3842    210    213                       2606    17175     questions questions_exam_id_fkey    FK CONSTRAINT     ~   ALTER TABLE ONLY public.questions
    ADD CONSTRAINT questions_exam_id_fkey FOREIGN KEY (exam_id) REFERENCES public.exam(id);
 J   ALTER TABLE ONLY public.questions DROP CONSTRAINT questions_exam_id_fkey;
       public          postgres    false    3844    213    215            ?   i   x?3伱?f??F?+n,????*?4NCK.#$??m?{2Ɯ????t??f??v??ov@?M8o?????vk???@???% QS???V?B$=7?o,ɚq??qqq ????      ?   ?  x???K?7??5???^("?9DN??G?E??ě??aO??x? ?A?hT?ŏԯ?,8?Ӂ?@-????Xk~?yF?g????󱖋??H|???f?Fe@??c???^zc???Ǉ_???Ǔ????K ?NP???m??t??>x??A???QX??Zi??[P:~??_?????w???bm?w?54p{	RȘUJ?V?L?2_??l???:?>B{???KP??ߏP??g?*?ͼdS?<T`-𶰵]%?$A=??`n???i?::˾?F?'bJ??cẸ?r-})?XL?~Õ??Ⱦ???m?mtk;?VT	??l,??P?SV7??1?}=PM????f?=??>>???D6??3|ϹF?????]?ԊnN??~|9??????)???RUz.?Y????@???BŌ??
9?ȭ??M??%??V?V??]??Y8??ؠ??2?+???Ki?Go?+X˳???؁??\Bj?P??&??M?X???
???1wl??Z?????/,?ŀz?hS$%?Fo???jg?j??EGK?ڑ?Y?M?t?X?;???~?h??r???)`;E;??*????Aqe???˺??q?S.X?`D/s?\??J?e)-W?>nu?7??????3XAI?*6k?v?o??zO?1?T?]X?????26?S:XTP??x?³?T?I??Uۘ?k??J??-?tk?<NAM??0?$o??imd?ձ?f?i?W?KC???׏??X;`?b\S;;??Ys??0g?/?hb??????ݴ{???Π??14}??)?H[??Qfʢc?6??f???ͺ?B?Sn!??>ү??,r??j?5:|?	W?7H?-1?(?w$??d???$(?Mf?Zy^y??{?@?{?w??.Q?-ec?\7?9?Y?t1?M?^y??Kw?Үs??g??M?p[1?9#?:?K:.???-{?????W?!???:?????RϞ?7???e6?????????~~xx?ǰ??      ?   ?   x?34?LI-N.?,(?,K?4???㼱????LL?.Csδ??LiAN~bJ?~aijqIf~^?>Xu~iIAi?n?????^IE	??~?!??A?z)i\???%@I?ŷV?Xc??V?[o???sc?? ?ܘrI? ?@?      ?     x???AnU1E???%U?I<c쀉?$P???%0A??@????f???ÒA?H??y?ޔM???f>???\<zz??g???AA??l?Ѳ/I?gIąS?^R???Rk????>;?85+%?w?eT??
ԅ?[?9Ay??k?Zлa?F?2??>?w?????7c???D:P1M=$R?I{ք??jCpz??=???!qN????Yb?????z??t?????{???0?5Z???-??A?2bk?m??@?b?BfH??????\X??5?j?PO9?C?R?:f0?U??v?p????x??K?W??ߺ?/?Q? ? Pt?C?U?-?p!ס,???UZT????zq9_o|??#7BpNy??????{?-H~?l???|?????\T?J?uפs?=b??z݁C????_????p=l?jY?j?2G"o9?$If6k?
y??Ř?gHTB8]?ȻH]&?J?I0??? ?RdG?Z?b?y;??½???\×??1I?"f??????پ?? ?53\     